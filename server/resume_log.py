from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime, timezone
import pymysql
from flask_sslify import SSLify

app = Flask(__name__)
SSLify(app)  # 启用 SSLify 模块

CORS(app)  # 这将应用CORS支持到所有的路由

# 配置 MySQL 连接
def get_db_connection():
    return pymysql.connect(
        host="localhost",
        user="user",
        password="sb123456",
        database="resume_log"
    )

@app.route('/api/resume/log', methods=['POST'])
def log_request():
    try:
        db = get_db_connection()  # 在每个请求中重新获取数据库连接
        # 获取当前的 UTC 时间
        server_time = datetime.now(timezone.utc)
        client_ip = request.remote_addr
        data = request.get_json()
        
        # 解析客户端时间戳并格式化为 MySQL 接受的格式
        client_timestamp_formatted = data['timestamp']
        
        # 打印到标准输出
        print(f"IP: {client_ip}, Client Timestamp: {client_timestamp_formatted}, Server Timestamp: {server_time}, Page: {data['page']}")
        
        # 插入数据到 MySQL 数据库
        cursor = db.cursor()
        query = "INSERT INTO log_table (client_ip, client_timestamp, server_timestamp, page) VALUES (%s, %s, %s, %s)"
        values = (client_ip, client_timestamp_formatted, server_time, data['page'])
        cursor.execute(query, values)
        db.commit()
        cursor.close()
        
        return jsonify({"status": "success"}), 200
    except pymysql.Error as e:
        print(f"Database error: {e}")
        return jsonify({"status": "error", "message": "Database error"}), 500
    except Exception as e:
        print(f"Unexpected error: {e}")
        return jsonify({"status": "error", "message": "Unexpected error"}), 500
    finally:
        db.close()

if __name__ == '__main__':
    try:
        app.run(port=5000, host='0.0.0.0', ssl_context=('/etc/letsencrypt/live/ssl.uint16kun.com/fullchain.pem', '/etc/letsencrypt/live/ssl.uint16kun.com/privkey.pem'))
    except Exception as e:
        print(f"Failed to start server: {e}")