import{_ as a,a as s,b as r,c as l}from"./图2-D5ZZee1K.js";import{_ as d,r as i,c as o,a as t,b as h,w as c,d as e,o as p}from"./app-BsDeUq1Q.js";const g={},m=e('<h2 id="プロジェクトのタスクと要件" tabindex="-1"><a class="header-anchor" href="#プロジェクトのタスクと要件"><span><strong>プロジェクトのタスクと要件</strong></span></a></h2><h3 id="タスク" tabindex="-1"><a class="header-anchor" href="#タスク"><span><strong>タスク</strong></span></a></h3><p> 非接触式の物体形状と寸法の自動測定装置を設計し制作する。装置の配置図は図1に示されており、測定装置は図に示された測定装置区内に配置され、被測定目標は図に示された被測定目標放置区内に配置される。装置は被測定目標の形状、寸法、測定ヘッドの中心点と被測定目標との間の距離などのパラメータを測定し、レーザービームを使用して被測定目標の中心位置を指示することができる。背景板は目標の後ろ5cmに立てて配置され、図2は目標板と背景板の配置図である。</p><div align="center"> 単位：mm <br><img src="'+a+'" align="middle"><br> 図1 テストシーン配置図 <img src="'+s+'" align="middle"><br> 図2 目標板と背景板配置図 </div><h3 id="要件" tabindex="-1"><a class="header-anchor" href="#要件"><span><strong>要件</strong></span></a></h3><ol><li><p>ある規則的な形状の平面目標を選択し、被測定目標放置区の中心線位置に配置し、測定ボタンを押した後に測定を開始し、測定完了後、装置上にその目標物体の辺の長さ（目標が円形の場合は直径）、幾何学的形状、目標と測定ヘッドの距離を表示する。測定と指示の全プロセスは合計2分以内で完了する必要がある。</p></li><li><p>目標板を交換し、配置区内の中心線上に目標と背景板を配置し、距離、形状、寸法（辺の長さ）を表示する。測定時間は2分以内である必要がある。</p></li><li><p>自動目標探索測定：測定ヘッドが中心線方向（0º）にあり、目標は目標放置区内の任意の位置に配置される。テストボタンを押した後、装置が自動的に目標を探索し、測定し、距離、形状、寸法を表示し、レーザーペンで幾何学的中心を指示する。所要時間は3分以内で、短いほど良い。</p></li><li><p>立体目標測定：バスケットボール、バレーボール、サッカーボールからランダムに1つを抽出し、3回の測定を繰り返し、球種を判断し、球表面との最短距離を測定する。所要時間は2分以内である必要がある。</p></li></ol><h2 id="実現案" tabindex="-1"><a class="header-anchor" href="#実現案"><span><strong>実現案</strong></span></a></h2>',7),x={id:"要約",tabindex:"-1"},b={class:"header-anchor",href:"#要約"},_=t("strong",null,"要約",-1),f=e('<p> 本設計の非接触式物体形状と寸法の自動測定装置は、ESP32-S3マイクロコントローラをシステム全体の制御コアとし、関連する周辺回路を補助として、被測定目標の形状、寸法、測定ヘッドの中心点と被測定目標との間の距離などのパラメータを自動的に測定し、レーザービームを使用して被測定目標の中心位置を指示することができる。このシステムは、ボタン、モータードライブモジュール、モーター、通信モジュール、OLEDディスプレイ、電源モジュール、認識モジュールなどで構成されている。ハードウェア回路上では、カメラを使用して被測定目標の形状、寸法、測定ヘッドの中心点と被測定目標との間の距離などのパラメータを認識し、ESP32-S3マイクロコントローラがリアルタイムデータを検出し、ディスプレイ上に目標物体の辺の長さ（目標が円形の場合は直径）、幾何学的形状、目標と測定ヘッドの距離を表示する。ソフトウェア面では、C++プログラミング、python3.6を使用し、マイクロコントローラプログラムを通じて目標物体の辺の長さ、幾何学的形状、目標と測定ヘッドの距離の測定を実現する。</p><h3 id="方案论证" tabindex="-1"><a class="header-anchor" href="#方案论证"><span><strong>方案论证</strong></span></a></h3><h4 id="降圧選択" tabindex="-1"><a class="header-anchor" href="#降圧選択"><span><strong>降圧選択</strong></span></a></h4><p><strong>方案一</strong> ：<strong>線形安定化電源</strong>（LDO）を採用する。低ドロップアウト線形安定化器の特筆すべき利点は、最低のコスト、最低のノイズ、最低の静止電流を持つことである。その周辺機器も少なく、通常は1、2個のバイパスコンデンサのみである。しかし、線形電源の効率は低く、発熱量が大きく、より大きな放熱面積が必要であり、低ドロップアウト変換や電源電圧の安定性が要求される場合にのみ適用可能であり、例えばマイクロコントローラなどの機器に電源を供給する場合に適している。</p><p><strong>方案二</strong> ：<strong>スイッチング電源</strong>を採用する。DC-DCにはブースト（昇圧）、バック（降圧）、ブースト/バック（昇/降圧）、逆相構造が含まれ、高効率、高出力電流、低静止電流などの特徴を持つ。LDOに比べて、電源スイッチの体積が小さく、高いドロップアウト変換に適している。したがって、本システムは電源スイッチを採用する。</p><h4 id="画像処理モジュール" tabindex="-1"><a class="header-anchor" href="#画像処理モジュール"><span><strong>画像処理モジュール</strong></span></a></h4><p><strong>方案一</strong> ：<strong>OpenMv</strong>を採用する。OpenMVは機械ビジョンに特化したオープンソースモジュールであり、CPythonプログラミング言語に基づいて、豊富な画像処理とコンピュータビジョン機能を提供する。OpenMvは顔認識、写真撮影、ビデオ録画などの機能を持つが、複雑なアルゴリズムを実行できず、実行時間が長くなることはできない。</p><p><strong>方案二</strong> ：<strong>K210</strong>を採用する。K210チップはさまざまな組み込み人工知能アプリケーションに使用でき、リアルタイム画像処理、目標検出、顔認識、音声認識、自然言語処理などの機能を実現できる。K210チップの主な利点は低消費電力と小さな体積であるが、計算能力とグラフィックス処理能力ではやや劣る。</p><p><strong>方案三</strong> ：<strong>Jetson</strong>を採用する。JetsonプラットフォームはNVIDIAのGPUアーキテクチャに基づいており、豊富なソフトウェアサポートと開発ツールを提供し、開発者がより簡単にアプリケーション開発と最適化を行うことができる。OpenMvとK210に比べて、Jetsonはより強力な計算能力とグラフィックス処理能力を持つため、本システムはJetsonを採用する。</p><h4 id="モーター選択" tabindex="-1"><a class="header-anchor" href="#モーター選択"><span><strong>モーター選択</strong></span></a></h4><p><strong>方案一</strong> ：サーボモーターを採用する。サーボモーターは位置フィードバックを持つモーターで、電動機の角度を正確に制御できる。サーボモーターは通常、直流電動機、位置センサー、制御回路で構成され、ロボット、模型飛行機、自動化装置などの分野で広く適用され、正確な位置制御を実現できる。</p><p><strong>方案二</strong> ：ブラシレスモーターを採用する。ブラシレスモーターは電子整流器を通じてモーターのローター位置を制御する。ブラシレスモーターは通常、ローターとステータで構成され、ローター上の永久磁石とステータ上のコイルは電子整流器を通じて交互に励磁され、モーターの回転を実現する。高効率、高トルク、高速度の特徴を持つ。全体的に見て、サーボモーターは正確な位置制御に適しており、ブラシレスモーターは高効率、高トルク、高速度のアプリケーションに適しているため、本システムはブラシレスモーターを採用する。</p><h4 id="モーター制御選択" tabindex="-1"><a class="header-anchor" href="#モーター制御選択"><span><strong>モーター制御選択</strong></span></a></h4><p><strong>方案一</strong> ：<strong>六步換相位</strong>を採用する。六步換相位は簡単なモーター制御方法で、モーターの三つの相位を順次切り替えてモーターの回転を制御するもので、簡単なモーター制御アプリケーションに適している。</p><p><strong>方案二</strong> ：<strong>SVPWM</strong>を採用する。SVPWMは高度なモーター制御方法で、モーターの電圧と周波数を調整してモーターの回転速度とトルクを制御し、高い制御精度と効率を持つ。モーター制御性能が高い要求されるアプリケーションに適しているため、本システムはSVPWMを採用してモーターの制御を実現する。</p><h3 id="システム設計と実現" tabindex="-1"><a class="header-anchor" href="#システム設計と実現"><span><strong>システム設計と実現</strong></span></a></h3><p>システムの全体構成図は図1に示されている。</p><div align="center"><img src="'+r+'" align="middle"><br> 図1 </div><h4 id="降圧回路設計" tabindex="-1"><a class="header-anchor" href="#降圧回路設計"><span><strong>降圧回路設計</strong></span></a></h4><p> スイッチング電源を使用して降圧するのは一般的な電源変換方式で、高電圧を低電圧に変換して負荷に供給することができる。降圧型スイッチング電源は通常、入力フィルタ回路、スイッチング素子、トランス、整流回路、出力フィルタ回路、フィードバック制御回路などで構成される。降圧型スイッチング電源の基本的な動作原理は、スイッチング素子のスイッチング動作を通じて入力電圧を高周波パルス信号に切り替え、それをトランスと整流回路を通じて安定した低電圧出力に変換することで、電源の12Vを5Vに変換する。</p><h4 id="ブラシレスモーター制御設計" tabindex="-1"><a class="header-anchor" href="#ブラシレスモーター制御設計"><span><strong>ブラシレスモーター制御設計</strong></span></a></h4><p> まずモーターを接続し、ブラシレスモーターの電源と制御信号線をESP32の対応するピンに接続する。次にESP32のコードでGPIOピンの動作モードと電圧を設定し、SVPWMを使用してブラシレスモーターの制御を実現し、最後にモーター制御ライブラリが提供する関数を使用してモーターの回転を制御する。</p><h4 id="レーザー測距設計" tabindex="-1"><a class="header-anchor" href="#レーザー測距設計"><span><strong>レーザー測距設計</strong></span></a></h4><p> レーザー測距はレーザー技術を利用して距離を測定する方法である。レーザーパルスを発射し、レーザーパルスが発射から受信までの時間を測定して距離を計算する。レーザー測距機は通常、レーザー発射器、受信器、クロック、計算器などで構成される。レーザー発射器はレーザーパルスを発射し、受信器は反射したレーザーパルスを受信し、受信した信号を電気信号に変換する。クロックはレーザーパルスの時間を測定し、計算器は距離を計算する。</p><h4 id="画像処理アルゴリズム設計" tabindex="-1"><a class="header-anchor" href="#画像処理アルゴリズム設計"><span><strong>画像処理アルゴリズム設計</strong></span></a></h4><p> テンプレートマッチングと円ハフ変換、および両者を組み合わせて円形、長方形、三角形の判断と認識を実現する。 円ハフ変換は画像中の円形を検出するために使用される。円ハフ変換は画像中の円形と直線のパラメータ空間を探索し、入力画像中の円形と直線にマッチするパラメータを見つける。OpenCVライブラリでは、HoughCircles関数を使用して円ハフ変換アルゴリズムを実現できる。 テンプレートマッチングと円ハフ変換を組み合わせて三角形と長方形の検出を実現する。まず、テンプレートマッチングを使用して画像中の三角形と長方形のエッジを検出し認識する。次に、円ハフ変換を使用して画像中の円形と直線を検出し認識し、三角形と長方形の位置と形状をさらに確定する。</p><h4 id="通信モジュール設計" tabindex="-1"><a class="header-anchor" href="#通信モジュール設計"><span><strong>通信モジュール設計</strong></span></a></h4><p> 通信にwifiを使用し、tcpプロトコルを通じて通信するのは一般的なネットワーク通信方式である。tcpプロトコルは信頼性の高い伝送プロトコルで、データの信頼性の高い伝送を保証し、データが失われたり破損したりしないことを確保する。wifiを通信媒体として使用すると、高速なデータ伝送速度と安定した接続品質を提供できる。jsonデータフォーマットを使用してデータを送信すると、データ解析が容易になる。jsonは軽量なデータ交換フォーマットで、良好な可読性と拡張性を持ち、データ解析と処理を容易にする。ネットワーク通信では、jsonフォーマット化されたデータを使用すると、データ伝送のサイズを減らし、データ伝送の効率を向上させることができる。</p><h3 id="テスト方案及びテスト結果分析" tabindex="-1"><a class="header-anchor" href="#テスト方案及びテスト結果分析"><span><strong>テスト方案及びテスト結果分析</strong></span></a></h3><h4 id="テスト機器" tabindex="-1"><a class="header-anchor" href="#テスト機器"><span><strong>テスト機器</strong></span></a></h4><p>オシロスコープ、電圧計、可変電源、デジタル発生器、巻尺。</p><h4 id="テスト方法" tabindex="-1"><a class="header-anchor" href="#テスト方法"><span><strong>テスト方法</strong></span></a></h4><h5 id="距離テスト" tabindex="-1"><a class="header-anchor" href="#距離テスト"><span>距離テスト</span></a></h5><p> 単眼カメラを使用して測距する。図中のfはカメラの焦点距離、cはレンズの光心である。物体から発せられた光はカメラの光心を通り、画像センサーまたは像平面に結像する。物体が存在する平面とカメラ平面の距離をd、物体の実際の高さをH、センサー上の高さをhとすると、Hは既知でなければならず、距離dを求めることができる。相似三角形から彼らの関係を得る：d/H=f/h。単眼カメラ測距原理図は図2に示されている。</p><div align="center"><img src="'+l+'" align="middle"><br> 図2 </div><h5 id="回路テスト" tabindex="-1"><a class="header-anchor" href="#回路テスト"><span>回路テスト</span></a></h5><p> 回路テスト時には、オシロスコープを使用して回路内の信号波形を観察し分析し、電圧と電流の時間変化波形図を表示し、回路の動作状態と性能を理解するのに役立つ。電圧計を使用して回路内の電圧を測定する。可変電源を使用して可変の電圧と電流を提供する。可変電源は通常、可変の出力電圧と電流制限を持ち、過負荷と短絡保護機能を備えているため、回路内の各種部品とデバイスのテストと電源供給に使用できる。デジタル発生器を使用して可変の信号を発生する。デジタル発生器は通常、複数の出力チャネルと可変の出力パラメータを持ち、回路内の各種信号源と信号プロセッサのテストとデバッグに使用できる。</p><h4 id="テスト結果" tabindex="-1"><a class="header-anchor" href="#テスト結果"><span><strong>テスト結果</strong></span></a></h4><p> 設計された自動測定装置の各種指標が満たされた状態で、各種要求に対して複数回のテストを行う。ある規則的な形状の平面目標を選択し、被測定目標放置区の中心線位置に配置し、測定ボタンを押した後に測定を開始し、同時にストップウォッチで計時し、測定終了後に定規を使用して実際の値を測定し、測定値と比較し、誤差値と測定時間が規定時間を超えているかどうかを観察する。図3に示すように</p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">測定距離（mm）</th><th style="text-align:center;">測定辺長または半径(mm)</th><th style="text-align:center;">実際の辺長(mm)</th></tr></thead><tbody><tr><td style="text-align:center;">長方形</td><td style="text-align:center;">2801</td><td style="text-align:center;">190/110</td><td style="text-align:center;">498/293</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">2753</td><td style="text-align:center;">193/110</td><td style="text-align:center;">408/293</td></tr><tr><td style="text-align:center;">三角形</td><td style="text-align:center;">2283</td><td style="text-align:center;">228/227/231</td><td style="text-align:center;">500/500/500</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">2513</td><td style="text-align:center;">219/208/208</td><td style="text-align:center;">500/500/500</td></tr><tr><td style="text-align:center;">円形</td><td style="text-align:center;">2301</td><td style="text-align:center;">112</td><td style="text-align:center;">250</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">2787</td><td style="text-align:center;">97</td><td style="text-align:center;">250</td></tr></tbody></table><h4 id="誤差原因" tabindex="-1"><a class="header-anchor" href="#誤差原因"><span><strong>誤差原因</strong></span></a></h4><p> 実験で使用される機器は固有の誤差を持つ可能性があり、機器の不完全な性能、校正の不正確さ、または老化などが原因である可能性がある。実験環境の変化は実験結果に影響を与える可能性がある。実験中にはいくつかの誤差が発生する可能性があり、例えば読み取り誤差、機器の配置の不正確さなどは、技術の熟練度、操作の不正確さ、または不注意などが原因である可能性がある。実験設計の不完全さまたは仮定の不正確さは誤差を引き起こす可能性がある。例えば、いくつかの影響要因を無視したり、サンプル数が不足したりするなど。</p><h3 id="総括" tabindex="-1"><a class="header-anchor" href="#総括"><span><strong>総括</strong></span></a></h3><p> 本システムはesp32を制御コアとして、被測定目標の形状、寸法、測定ヘッドの中心点と被測定目標との間の距離などのパラメータを自動的に測定し、レーザービームを使用して被測定目標の中心位置を指示することができる装置を設計した。本システムは課題の基本部分と発展部分のすべての要求を良好に完了し、システム全体の性能は良好であるが、時間の関係でレーザーペンを使用して幾何学的中心を指示することが良好に実現されておらず、システムはさらに改善と完</p>',44);function y(u,v){const n=i("center");return p(),o("div",null,[m,t("h3",x,[t("a",b,[t("span",null,[h(n,null,{default:c(()=>[_]),_:1})])])]),f])}const j=d(g,[["render",y],["__file","Non-contact object size and shape measurement.html.vue"]]),S=JSON.parse('{"path":"/jp/my-projects/Non-contact%20object%20size%20and%20shape%20measurement.html","title":"非接触物体の寸法と形状の測定","lang":"ja-JP","frontmatter":{"title":"非接触物体の寸法と形状の測定"},"headers":[{"level":2,"title":"プロジェクトのタスクと要件","slug":"プロジェクトのタスクと要件","link":"#プロジェクトのタスクと要件","children":[{"level":3,"title":"タスク","slug":"タスク","link":"#タスク","children":[]},{"level":3,"title":"要件","slug":"要件","link":"#要件","children":[]}]},{"level":2,"title":"実現案","slug":"実現案","link":"#実現案","children":[{"level":3,"title":"要約","slug":"要約","link":"#要約","children":[]},{"level":3,"title":"方案论证","slug":"方案论证","link":"#方案论证","children":[]},{"level":3,"title":"システム設計と実現","slug":"システム設計と実現","link":"#システム設計と実現","children":[]},{"level":3,"title":"テスト方案及びテスト結果分析","slug":"テスト方案及びテスト結果分析","link":"#テスト方案及びテスト結果分析","children":[]},{"level":3,"title":"総括","slug":"総括","link":"#総括","children":[]}]}],"git":{"updatedTime":1721203226000,"contributors":[{"name":"uint16kun","email":"uint16kun","commits":2}]},"filePathRelative":"jp/my-projects/Non-contact object size and shape measurement.md","excerpt":"<h2><strong>プロジェクトのタスクと要件</strong></h2>\\n<h3><strong>タスク</strong></h3>\\n<p> 非接触式の物体形状と寸法の自動測定装置を設計し制作する。装置の配置図は図1に示されており、測定装置は図に示された測定装置区内に配置され、被測定目標は図に示された被測定目標放置区内に配置される。装置は被測定目標の形状、寸法、測定ヘッドの中心点と被測定目標との間の距離などのパラメータを測定し、レーザービームを使用して被測定目標の中心位置を指示することができる。背景板は目標の後ろ5cmに立てて配置され、図2は目標板と背景板の配置図である。</p>\\n<div align=\\"center\\">\\n    単位：mm\\n    <br><br>    \\n    <img src=\\"/zh/非接触物体尺寸形态测量/图1测试场景布置图.png\\" align=\\"middle\\">\\n    <br><br>\\n    図1 テストシーン配置図\\n    <img src=\\"/zh/非接触物体尺寸形态测量/图2目标板和背景板放置示意图.png\\" align=\\"middle\\">\\n    <br><br>\\n    図2 目標板と背景板配置図\\n</div>"}');export{j as comp,S as data};
