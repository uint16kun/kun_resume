from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
from datetime import datetime, timezone


app = Flask(__name__)
CORS(app)  # 这将应用CORS支持到所有的路由

# 重定向标准输出到文件
original_stdout = sys.stdout
sys.stdout = open('output.txt', 'a', buffering=1)  # 使用行缓冲模式

@app.route('/', methods=['POST'])
def log_request():
    # 获取当前的 UTC 时间
    now = datetime.now(timezone.utc)
    # 格式化时间为指定的格式
    server_time = now.strftime('%Y-%m-%dT%H:%M:%S.%f')[:-3] + 'Z'
    client_ip = request.remote_addr
    data = request.get_json()
    print(f"IP: {client_ip}, Client Timestamp: {data['timestamp']}, Server Timestamp: {server_time}, Page: {data['page']}")
    return jsonify({"status": "success"}), 200

if __name__ == '__main__':
    app.run(debug=False, port=5000)
    sys.stdout.close()
    sys.stdout = original_stdout  # 恢复标准输出