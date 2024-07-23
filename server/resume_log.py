from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
from datetime import datetime, timezone
import pymysql

app = Flask(__name__)
CORS(app)  # 这将应用CORS支持到所有的路由

# 重定向标准输出到文件
original_stdout = sys.stdout
sys.stdout = open('output.txt', 'a', buffering=1)  # 使用行缓冲模式

# 配置 MySQL 连接
db = pymysql.connect(
    host="localhost",
    user="user",
    password="sb123456",
    database="resume_log"
)

@app.route('/api/resume/log', methods=['POST'])
def log_request():
    # 获取当前的 UTC 时间
    now = datetime.now(timezone.utc)
    # 格式化时间为指定的格式
    server_time = now.strftime('%Y-%m-%d %H:%M:%S')
    client_ip = request.remote_addr
    data = request.get_json()
    
    # 解析客户端时间戳并格式化为 MySQL 接受的格式
    client_timestamp = datetime.fromisoformat(data['timestamp'].replace('Z', '+00:00'))
    client_timestamp_formatted = client_timestamp.strftime('%Y-%m-%d %H:%M:%S')
    
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

if __name__ == '__main__':
    app.run(debug=False, port=5000, host='0.0.0.0')
    sys.stdout.close()
    sys.stdout = original_stdout  # 恢复标准输出