from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
from datetime import datetime, timezone
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)  # 这将应用CORS支持到所有的路由

# 配置数据库
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://username:password@localhost/database_name'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# 定义数据库模型
class Log(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ip = db.Column(db.String(45), nullable=False)
    client_time = db.Column(db.String(30), nullable=False)
    server_time = db.Column(db.String(30), nullable=False)
    page = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<Log {self.id}>'

# 创建数据库表
db.create_all()

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
    
    # 创建一个新的 Log 对象
    new_log = Log(
        ip=client_ip,
        client_time=data['timestamp'],
        server_time=server_time,
        page=data['page']
    )
    
    # 将新的 Log 对象添加到数据库会话中
    db.session.add(new_log)
    # 提交会话以保存更改
    db.session.commit()
    
    print(f"IP: {client_ip}, Client Time: {data['timestamp']}, Server Time: {server_time}, Page: {data['page']}")
    return jsonify({"status": "success"}), 200

if __name__ == '__main__':
    app.run(debug=False, port=5000)
    sys.stdout.close()
    sys.stdout = original_stdout  # 恢复标准输出