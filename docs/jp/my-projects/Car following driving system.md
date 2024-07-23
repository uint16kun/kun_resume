---
title: 車両追従走行システム
---
## **プロジェクト要件**

### **タスク**
&emsp;TIのMCUを使用して、車両追従走行システムを設計する。このシステムは、1台のリーダー車と1台の追従車で構成され、車両にはトレース機能があり、速度は0.3～1m/sで調整可能で、指定された経路で走行操作を完了する必要がある。走行場所の経路は図1に示されている。経路のA点は、リーダー車の走行の開始点と終了点である。車両が1回の走行で終点に到達すると、リーダー車と追従車は音声で通知する。リーダー車と追従車は、ABFDEの角丸矩形（内側のサークルと呼ぶ）経路またはABCDEの角丸矩形（外側のサークルと呼ぶ）経路に沿って走行できる。内側のサークルのBFD区間で走行する際、車両はライトを点灯する。さらに、テスト中に経路のE点の直線領域に、テスト専門家が指定した位置に「停止指示」のマーカーを置くことができる（図1左側参照）。リーダー車はこの位置で停止し、5秒間待機してから再び走行を続ける。

<div align = "center">    
    <img src="/zh/小车跟随行驶系统/图1小车跟随行驶场地示意图.png"  align = "middle" />
    <br></br>
    図1 車両追従走行場所の示意図
</div>

### **要件**

1. リーダー車を経路の開始位置A点に置き、追従車をその20cm後ろに置き、リーダー車の速度を0.3m/sに設定し、外側のサークル経路を1周して停止する。要件：
- リーダー車の平均速度誤差は10%以内であること。
- 追従車はリーダー車に追従し、走行中に車両の衝突が発生しないこと。
- 1周走行後、リーダー車がA点で停止し、追従車は適時停止し、停止時間差は1秒以内で、リーダー車との間隔は20cmで、誤差は6cm以内であること。

2. リーダー車を経路の開始位置A点に置き、追従車を経路のE点の直線領域にテスト専門家が指定した位置に置き、リーダー車の速度を0.5m/sに設定し、外側のサークル経路を2周して停止する。要件：
- リーダー車の平均速度誤差は10%以内であること。
- 追従車は迅速にリーダー車に追いつき、20cmの間隔でリーダー車に追従し、走行中に車両の衝突が発生しないこと。
- 2周走行後、リーダー車がA点で停止し、追従車は適時停止し、停止時間差は1秒以内で、リーダー車との間隔は20cmで、誤差は6cm以内であること。

3. リーダー車を経路の開始位置A点に置き、追従車をその20cm後ろに置き、リーダー車と追従車が3周の経路を連続して走行する。第1周はリーダー車と追従車が外側のサークル経路を走行する。第2周はリーダー車が外側のサークル経路を走行し、追従車が内側のサークル経路を走行し、追い抜きを実現する。第3周は追従車が外側のサークル経路を走行し、リーダー車が内側のサークル経路を走行し、逆転と再びリーダーを実現する。要件：
- 走行中の2台の車両は安定して走行し、2回の追い抜きを円滑に完了し、車両の衝突が発生しないこと。
- 3周走行後、リーダー車がA点で停止し、追従車は適時停止し、停止時間差は1秒以内で、リーダー車との間隔は20cmで、誤差は6cm以内であること。
- 車両の走行速度は自主的に設定できるが、0.3m/s未満であってはならず、規定の3周の経路走行に要する時間はできるだけ短いこと。

4. テスト専門家が経路のE点の直線領域に指定した位置に「停止指示」のマーカーを置く。そして、リーダー車を経路の開始位置A点に置き、追従車をその20cm後ろに置き、リーダー車の速度を1m/sに設定し、外側のサークル経路を1周し、走行中に2台の車両が衝突しない。要件：
- リーダー車の平均速度誤差は10%以内であること。
- リーダー車が「停止指示」点で停止し、停止位置は正確で、誤差は5cm以内であること。
- 「停止指示」での停止時間は5秒で、誤差は1秒以内であること。

### **説明**
1. 作品の車両のサイズは15cm（幅）X 25cm（長さ）以内である。車両のサイズには車両本体および車両に取り付けられたセンサーなどの全体のサイズが含まれる。
2. 走行場所には白紙を敷き、走行経路は1cm幅の黒いガイド線で示され、白紙に印刷または印刷されるか、黒いテープで直接貼り付けられる。経路の開始点Aは、経路ガイド線に垂直に貼り付けられた2cm幅、5cm長の黒いマーカー線でマークされる。「停止指示」は、5cm間隔の2cm幅、10cm長の2本の黒い平行マーカー線でマークされ、小さな紙片に事前に印刷され、テスト時に経路のガイド線に接着できる。課題要件以外のマークは走行場所にあってはならない。
3. 追従車の走行はリーダー車によって完全に制御され、リーダー車にはスタートボタンと設定ボタンがあり、追従車には電源スイッチのみがあり、他のスタートおよび操作ボタンはあってはならない。走行開始時に、リーダー車と追従車は課題要件に従って走行経路の指定位置に配置され、追従車は電源を入れ、リーダー車の指令を待機状態にする。リーダー車はワンクリックで走行を開始し、走行プロセス全体が終了するまで。
4. 2台の車両の追従走行中、2台の車両間の通信以外に、車外のリモコンや他の通信指令は使用できない。
5. 課題要件4で、リーダー車が「停止指示」に遭遇した場合、即座に停止し、停止後の車体は「停止指示」の2本目の横線以内にあり、車の前部が2本目の横線を超える距離が停止位置の誤差である。

## **実現案**

### <center>**要約**</center>

&emsp;本システムの2台の3輪2輪駆動車の主制御システムはTI MSP432を採用。UWB定位モジュール、HC-12ブルートゥースモジュール、tb6612モータードライブモジュール、グレースケールセンサー、エンコーダーを通じて多センサー融合アルゴリズムを使用し、制御モデルに必要なパラメータを計算し、PWMの可制御電流を提供し、最終的に車両の運動制御を実現する。同時に、制御パラメータの調整を容易にするために、OLEDディスプレイを使用して関連パラメータの調整を効果的に監視する。最終的に2台の車両は一定速度でライントレース追従し、外部センサーに依存して対応するタスクを完了することができる。繰り返しの調整と改善を経て、ライントレース車両システムは信頼性が高く、走行が安定し、指標要件を満たしている。

###  **方案论证**

#### **主控芯片选择**

1. 車両システムアーキテクチャの選択の第一はMCUの性能であり、その中で最も重要なのはシステムの主周波数であり、これはMCUの実行速度に直接影響し、車両には多くのセンサーデータと複雑なアルゴリズムの処理が必要である。MCUの性能がこのような計算をサポートできない場合、システム全体の機能を実現できず、車両システムが崩壊する可能性がある。

2. MCUのIOポートも重要であり、各センサーのデータはIOポートを通じて対応する位置に転送される。例えば、USART、I2C、SPI、GPIOの数など。

3. 上記の要件に基づいて、いくつかの異なる予想案を経て、最終的に以下のように議論した：

**方案一**：msp430を採用する。このMCUは高性能、低消費電力の6xxシリーズフラッグシップモデルで、25MIPS@3.3Vを達成し、電源管理モジュールとUSBコントローラーを装備し、LCDコントローラーを装備し、256KBのFLASH、18KBのRAM、74ピンのピン数を持ち、消費電力は5xxシリーズと同じで、電圧管理モジュールが追加されているが、このMCUの主周波数はまだ低い。

**方案二**：msp432MCUを採用する。このコントローラーは高速48MHZクロックを持ち、周波数の安定性が高く、制御性が高く、予定しているセンサー融合案と組み合わせて専門的に設計されている。さらに、より多くのIOポートとボード上の周辺機器を提供し、多センサー融合アルゴリズムに効果的な実現プラットフォームを提供するが、同時に設計と実現に一定の困難をもたらす。

&emsp;上記の議論を総合して、我々のニーズに合った方案二を選択した。

#### **降压模块选择**

**方案一**: 線形素子LM7805三端子レギュレーターを使用してレギュレーション回路を構成し、マイコンに電圧を供給する。出力リップルが小さいが、効率が低く、発熱しやすい。

**方案二**: 素子LM2596を使用してレギュレーション回路を構成する。効率が高く、発熱しにくいが、出力リップルが大きい。

&emsp;システム性能の総合的な考慮の結果、車両はバッテリーで独立して運行し、効率的なレギュレーションが必要であり、出力リップルの影響を受けにくいため、方案二を選択した。

#### **小车电机选择**

**方案一**: 310モーターを採用する。パワーが強いが、重量が大きい。

**方案二**: ng20減速モーターを採用する。パワーはやや弱いが、重量が軽い。

&emsp;繰り返しの研究の結果、速度を維持しながら姿勢を維持するために、より高速回転と大きなトルクを持つ310モーターを選択した。

#### **驱动模块选择**

**方案一**: MOSトランジスタとフルブリッジ/ハーフブリッジドライブチップを使用してモータードライブを構築する。モーター電流を許容できるが、構造が複雑で、体積が大きい。

**方案二**: TB6612チップベースのドライブモジュールを使用する。モジュール使用が簡単で、配線が便利で、体積が比較的小さいが、許容電流が小さい。

&emsp;総合的な考慮の結果、車両の体積が大きすぎず、TB6612モジュールのドライブ電流がシステムのニーズを満たすことができるため、方案二を選択した。

### **理论分析与计算**

#### **小车运动控制设计**

1. 偏差の比例、積分、微分による制御器をPID制御器と呼ぶ。PID制御は自動制御理論が解決しようとする最も基本的な問題を解決し、システムの正確性、安定性、リアルタイム性を解決する。経路認識の状況に基づいて、車両に対応する制御を行い、速度を合理的に設定する目的を達成する。システムは測速モジュールからの速度値を受け取り、PIDアルゴリズムを通じて調整し、直流モーターの回転速度を変更し、車両の加速と減速、および方向転換を制御する。

&emsp;本グループは増分PIDアルゴリズムを採用する。増分PID制御は、制御量の増分（今回の制御量と前回の制御量の差）をPID制御するアルゴリズムである。基本式は以下の通り：

$$
    \Delta u_n=K_p(e_n-e_{n-1})+K_i*e_n+K_d(e_n-2e_{n-1}+e_{n-2})\tag{1}
$$

&emsp;ここで、$\Delta u_n$はn回目の出力増分、$e_n$はn回目の偏差、$K_p、K_i、K_d$はそれぞれ比例、積分、微分の係数である。

2. 方向転換制御方法

&emsp;車両の方向転換は差動速度制御方法を採用し、異なる内側輪と外側輪の速度を設定して車両の走行方向を変更する。車両の前進中、赤外線センサーが検出した経路の変化を方向転換の条件とし、測定された現在の車速に基づいて、内側輪と外側輪の回転速度をそれぞれ調整する。内側輪の速度から現在の速度の一定の割合を差し引き、外側輪に現在の速度の一定の割合を加え、差動速度制御によって方向転換を実現し、車両が経路に沿って走行する。

3. グレースケールセンサーの位置計算方法

<div align = "center">    
    <img src="/zh/小车跟随行驶系统/图1灰度传感器基本控制原理.jpg"  align = "middle" />
    <br></br>
    図1 グレースケールセンサー基本制御原理
</div>

&emsp;本システムはグレースケールセンサーを使用して地面の経路を検出する。赤外線が黒色の目標に照射されると、反射され、受信したフィードバック信号はすぐに高電位になる。等間隔に配置された赤外線センサーアレイからデータを読み取り、各赤外線センサーアレイに対応する位置情報を付与する。センサーが地面に近接し、黒い太線を検出した場合にのみ「1」を出力するため、位置情報とセンサーフィードバックデータをビットごとに乗算することで、車両と経路の相対位置情報を取得できる。

#### **小车通信模式分析**

&emsp;本システムはHC-12無線モジュールを使用して2台の車両間の通信を行い、動作周波数帯域は433.4MHzから473.0MHzで、100のチャンネルを持ち、チャンネルステップは40KHzである。

#### **小车距离控制**

&emsp;本システムの距離制御は超広帯域（UWB）定位技術を採用し、前車に配置されたアンカーノードとブリッジノードを使用し、後車のブラインドノードと通信し、異なる基地局と移動端末の伝送遅延差を測定して定位する。UWBからのデータを通じて2台の車両の速度を整理し、データをPIDにパッケージ化し、PIDからのPWMを通じて2台の車両の速度を制御し、車両の距離を制御する。

### **电路与程序设计**

#### **系统组成与框图**

&emsp;本システムの全体的なブロック図は図2に示されている。処理MCUはMSP432で、周辺回路は主にグレースケールセンサー、ドライブモジュール、レギュレーションモジュール、速度検出モジュールで構成されている。以下で各モジュールの設計の構成を分析する。

<div align = "center">    
    <img src="/zh/小车跟随行驶系统/图2系统总体框图.png"  align = "middle" />
    <br></br>
    図2 システム全体ブロック図
</div>

#### **小车寻迹电路**

<div align = "center">    
    <img src="/zh/小车跟随行驶系统/图3小车寻迹电路.jpg"  align = "middle" />
    <br></br>
    図3 小车寻迹电路
</div>

#### **小车间通信电路**

<div align = "center">    
    <img src="/zh/小车跟随行驶系统/图4小车间通信电路.jpg"  align = "middle" />
    <br></br>
    図4 小车间通信电路
</div>

#### **小车防撞电路**

<div align = "center">    
    <img src="/zh/小车跟随行驶系统/图5小车防撞电路.jpg"  align = "middle" />
    <br></br>
    図5 小车防撞电路
</div>

#### **程序总流程图**

<div align = "center">    
    <img src="/zh/小车跟随行驶系统/图6程序总流程图.jpg"  align = "middle" />
    <br></br>
    図6 程序总流程图
</div>

### **测试方案与测试结果**

#### **测试方法与仪器**

1. 仪器：オシロスコープ（DSOX2012A）、直流安定化電源（GPS-3303C）、マルチメーター（DT9205A）

2. 测试方法：まず部分ごとに後に全体：各モジュール回路を別々にテストし、機能を実現できることを確認した後、車両を組み立て、プログラムを書き込む。車両をトラックに置き、まず車両のライントレース機能が完全であるかをテストし、次に双車システムの測距機能が良好であるかをテストし、車両の速度と停止時の2台の車両の距離の誤差をそれぞれテストする。車両の速度を設定し、上記の操作を繰り返す。

<center>
(1) 基本要求一：2台の車両の速度は0.5m/s、2台の車両の間隔は20cm

表1 测试结果记录表
</center>

|测试次数|目標時間/s|実際の時間/s|停止点の2台の車両の間隔誤差/cm|
|:----:|:----:|:----:|:----:|
|1|18|16|2.6|
|2|18|17|1.0|
|3|18|18.6|0.6|

<center>
(2) 基本要求二：2台の車両の速度は0.5m/s、車両の間隔は20cm

表2 测试结果记录表
</center>

|测试次数|目標距離/cm|目標時間/s|実際の時間/s|停止点誤差/cm|
|:----:|:----:|:----:|:----:|:----:|
|1|20|24|20|1.3|
|2|20|24|16.1|1.6|
|3|20|24|19.3|2.6|
|4|20|24|22|1.0|
|5|20|24|23|0.6|
|6|20|24|24.3|0.6|

#### **结果分析**

&emsp;各部分のハードウェア回路は正常にテストされ、それぞれの機能を実現できる。コードの記述は正確で、予想機能を実現できる。車両はライントレースと追跡機能を実現し、指定位置で停止し、ブザーが鳴り、速度も指定要件を満たす。このシステムは基本的に課題の要件を実現しているが、いくつかのカーブではカクカクしているため、プログラムとハードウェア性能をさらに最適化する。