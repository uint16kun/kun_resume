---
title: 盆栽植物高通量表型監視システム
---
## <center>**要約**</center>

&emsp;我が国の経済が持続的に発展し、国民の生活水準が向上するにつれて、多くの人々が盆栽植物の栽培に注目し、室内空気環境の質を改善するために取り組んでいます。しかし、伝統的な盆栽植物の栽培は主に手作業に依存しており、栽培プロセスは労働者の経験に大きく依存しており、科学性に欠け、時間と労力を要し、大規模な経済効果の生産には適していません。この問題に対処するため、本プロジェクトでは盆栽植物の成長状況、土壌栄養状態、植物の高さなどの成長発育の重要なパラメータをリアルタイムで監視し、それに基づいて水肥の動的調整を実現する盆栽植物高通量表型監視システムを設計・実装しました。このシステムは、感知モジュール、制御モジュール、および人機交互モジュールの三つの部分から構成されています。感知モジュールは、土壌センサー、スペクトルセンサー、レーザーセンサーおよび独自開発の周辺機能回路と機械構造を利用して、盆栽植物の高通量表型パラメータをリアルタイムで取得します。制御モジュールは、瑞薩RA6M5マイクロコントローラを制御コアとし、植物表型データの受信、処理、伝送、表示および水肥施用のインテリジェントな意思決定と制御を担当します。人機交互モジュールは、シリアルポートディスプレイと上位機交互インターフェースを含み、シリアルポートディスプレイはシリアル通信を通じて直接RA6M5マイクロコントローラとデータ交換を行い、テスト制御、基本的なテスト結果表示などの機能を実現します。上位機交互インターフェースは、クラウド上に展開されたVueプログレッシブJavaScriptフレームワークを使用して実行され、植物のリアルタイム3次元構造モデリングなどの複雑なデータ結果を表示します。このシステムの初期開発と応用は、盆栽植物の生産に科学かつ包括的な指導を提供し、農業デジタル経済の急速な発展をより良く実現することができます。

## **作品概要**

### **設計背景と意義**

&emsp;我が国の住民生活水準の向上に伴い、国民は健康、自然、生態に対する関心も日増しに高まっています。多くの家庭で室内に盆栽植物を植えることを選択し、これは室内空気質の改善に加えて、居住環境の美化にも寄与しています。インターネットショッピングの普及と宅配便の配送速度の大幅な向上により、人々の盆栽植物購入の熱意がさらに高まっています。したがって、盆栽植物の工業化、規模化、産業化、経済化の栽培需要が急増しています。しかし、伝統的な盆栽植物の栽培は手作業が主体であり、この方法は時間と労力を要し、時間効率が悪く、デジタル農業の経済化に大きな障害となっています。

#### **関連研究**

&emsp;植物のスペクトル植生指数、土壌パラメータ、株高などのパラメータの監視は、植物のリアルタイム成長状況の監視と診断に適しています。スペクトル植生指数を通じて植物の窒素含量、クロロフィル含量、葉面積などのパラメータを推定する研究が多く行われています。また、土壌パラメータを用いた変量施肥制御は、現在の情報農業発展の技術的な最前線です。さらに、株高などの表型パラメータは、植物の現在の成長状況を形態学的観点から反映することができます。したがって、現在の技術状況に基づいて、上記のパラメータを高通量で取得し、分析を組み合わせることで、盆栽植物の成長状況をより良く監視し、適時に介入することができます。

#### **特色説明**

&emsp;本作品は、瑞薩RA6M5マイクロコントローラを制御コアとし、土壌センサー、スペクトルセンサー、レーザーセンサーおよび独自開発の周辺機能回路と機械構造との組み合わせにより、単一の盆栽作物の土壌パラメータ、スペクトルパラメータ、および三次元モデルのリアルタイム取得を実現しています。主な特色は以下の通りです：

- 複数のインターフェースと増幅回路を採用し、土壌、スペクトル、植物形態などの異なるタイプのデータをリアルタイムで収集することができ、他のセンサーデバイスを接続するためのインターフェースを備えており、システム機能の拡張が可能です。
- シリアルポートディスプレイと上位機交互インターフェースの二つのデータテストおよび表示方式を設計し、現場での実地確認制御とリモートネットワークインタラクティブ制御の二つのモードを備えており、家庭用シーンと同様に工業化栽培シーンにも適用可能です。

#### **応用前景分析**

&emsp;本作品は、予定された機能を基本的に完了し、盆栽植物の土壌パラメータ、スペクトルパラメータを迅速に取得し、植物の三次元構造をリアルタイムでモデリングすることができます。しかし、開発時間とセンサーテスト精度の制限により、現在のシステムは単一の盆栽植物のみをテストすることができますが、将来のシーンでは、自動化輸送機構、レーザーレーダー、深度カメラ、5G/6G通信などの現代化技術と装備との組み合わせにより、完全な盆栽植物ライン栽培監視システムを形成することが可能であり、国家の農業自動化レベルとデジタル経済効果を大幅に向上させることができます。

## **作品設計と実現**

&emsp;本作品は、盆栽植物の成長状況、土壌栄養状態、株高などの成長発育の重要なパラメータをリアルタイムで監視し、それに基づいて水肥の動的調整を実現する盆栽植物高通量表型監視システムを設計しました。システム構造は主に三つの部分に分けられます：感知モジュール、制御モジュール、および人機交互モジュールです。システム構造は図1に示されています。

&emsp;感知モジュールは主に土壌センサー、スペクトルセンサー、レーザースキャンコンポーネントから構成されています。これらのセンサーが協調して動作し、植物とその成長環境に関する詳細なデータを収集します。制御モジュールは瑞薩RA6M5マイクロコントローラをコアとし、レーザー装置とステッピングモーターを制御して正確な植物点群スキャンを実行します。このモジュールは、スペクトルセンサーと土壌センサーからのデータの同期読み取りも担当し、必要な分析処理後にクラウドにアップロードします。人機交互モジュールは、シリアルポートディスプレイ交互と上位機ウェブ交互の二つの方式を含み、ユーザーに友好的な操作インターフェースを提供し、ユーザーがリアルタイムでデータを監視し、システム設定を調整できるようにします。周辺補助機能回路には、照明システム、電源管理、システム全体の機械構造設計が含まれており、これらの機能はシステムの安定運用とデータの正確性向上のための重要なコンポーネントです。

&emsp;以上のように、この監視システムは、盆栽植物栽培のための効率的で自動化されたソリューションを提供し、盆栽植物表型データの正確な監視と分析をサポートし、植物科学研究と精密農業の発展をサポートします。

<div align = "center">    
    <img src="/zh/盆栽植物高通量表型监测系统/图1.jpg"  align = "middle" />
    <br></br>
    図1 盆栽植物高通量表型監視システム 全体構造図
</div>

### **周辺補助回路とそのフレームワーク**

#### **主体フレームワーク**

&emsp;本プロジェクトのシステムフレームワークは、角アルミニウム材料を使用して構築され、外観は高さ1メートル、長さと幅がそれぞれ0.5メートルの直方体です。システムの底部にはステッピングモーターディスクが取り付けられており、この装置は植物を支えるだけでなく、360度の均一な回転を実現し、三次元モデルスキャンに使用できるだけでなく、植物が均一な光と灌漑を受けることを確保します。底座の左上隅には156WのLRSスイッチング電源が取り付けられており、この電源は220V交流電源を24V直流電源に変換し、システム全体に電力を供給します。

&emsp;制御倉はシステム主体フレームワークの頂部左側に装備されており、内部には必要なマイクロプロセッサチップとシリアルポートディスプレイが集約されており、システムの情報表示とリアルタイム操作インタラクションを担当します。フレームワークの頂部中央には50Wのハロゲンランプとスペクトルセンサーが設置されており、これらのデバイスは必要な照明を提供するだけでなく、スペクトルデータを監視して植物の健康状態を評価します。

&emsp;フレームワークの左側にはステッピングスクリュースライド台が取り付けられており、このスライド台には測距モジュールが統合されており、3Dモデリング過程で距離と高さデータを取得します。土壌センサーと灌漑システムはシステムフレームワークの反対側に設計装備されており、この土壌センサーは自動的に土壌に挿入および引き抜きを行い、定期的な監視を実現します。同時に、土壌センサーと上端スペクトルセンサーのテスト結果は、灌漑システムに意思決定情報を提供し、リアルタイム同期灌漑を実現します。

&emsp;システム全体の設計と実施は、操作の利便性と技術機能の高度な統合を考慮しており、精密な制御と細かい監視を通じて植物の成長環境を最適化し、最適な成長効果を達成することを目的としています。システムの機械構造と周辺補助回路は図2に示されています。

<div align = "center">    
    <img src="/zh/盆栽植物高通量表型监测系统/图2.png"  align = "middle" />
    <br></br>
    図2 システム機械構造及び周辺補助回路
</div>

#### **照明**

&emsp;スペクトルセンサーの安定した正確なテストを実現するために、プロジェクトは64445U（24V 50W）モデルのハロゲンランプを採用しました。ハロゲンランプは高効率の光エネルギー変換率と長寿命を持ち、システムの長期安定運用を保証すると同時に、メンテナンスと運用コストを低減します。この光源は太陽光のスペクトル特性を一定程度備えており、線形全波長照明を提供します。この照明技術は植物に必要な照明条件を提供するだけでなく、照明の均一性と連続性を確保します。さらに、この照明方式はスペクトルセンサーが必要な波長帯のスペクトル信号を捕捉し、正確なスペクトルデータ分析を容易にします。

#### **電源**

&emsp;本プロジェクトでは、各電子コンポーネントの特定の電圧要件を満たし、電源の効率的な配分を確保するために、4組のDC-DCオープンソース電源モジュールを採用しました。これらのモジュールは、主電源の明緯350 LRSスイッチング電源から提供される24V電圧をそれぞれのコンポーネントが必要とする異なる電圧に変換します。具体的な電圧構成は以下の通りです：

1. 第1組のDC-DCモジュールは12V電圧を提供し、土壌センサーに電力を供給します。
2. 第2組のDC-DCモジュールは6V電圧を出力し、サーボモーターを駆動します。
3. 第3組のDC-DCモジュールは24V電圧を5Vに降圧し、測距モジュール、432からTTLへの回路、スペクトルのT型増幅回路、ポンプ、およびシリアルポートディスプレイに使用します。
4. 第4組のDC-DCモジュールは24V電圧を3.3Vに変換し、マイクロコントローラに電力を供給します。

&emsp;このような構成により、システムは各コンポーネントが理想的な電圧環境で動作することを確保し、最大限の性能と安定性を発揮します。さらに、DC-DC変換技術を採用することでエネルギー効率が向上し、エネルギー消費が減少します。これは、これらのモジュールが電圧変換時のエネルギー損失が比較的低いためです。

### **感知モジュール**

#### **土壌センサー**

&emsp;プロジェクトの開発期間が限られているため、土壌センサーは独自開発されず、商用土壌センサーJXBS 3001 TR PHが採用されました。この土壌センサーは、土壌の温度、湿度、電気伝導率、pH値、および窒素、リン、カリウムの含量を正確に測定することができます。使用中、マイクロコントローラは485通信プロトコルを使用して土壌センサーと通信し、通信過程でTTL電圧を抗干渉性の高い485電圧に変換するためにTTLモジュールを使用します。次に、土壌センサーデータは瑞薩RA6M5マイクロコントローラのシリアルポート8に送信され、具体的にはPA00とP607の2つのピンに接続されます。データ伝送の完全性を確保するために、システムはModBus CRC16検証メカニズムを採用しています。データの欠落が検出された場合、問題のあるデータは自動的に破棄されます。この効率的な設計は、データの正確性を確保し、伝送の信頼性を向上させます。土壌センサーの伝送プロセスは図3に示されています。

<div align = "center">    
    <img src="/zh/盆栽植物高通量表型监测系统/图3.jpg"  align = "middle" />
    <br></br>
    図3 土壌センサー伝送プロセス図
</div>

#### **スペクトルセンサー**

&emsp;プロジェクトは、盆栽植物のリアルタイム成長状況を取得するためにスペクトルセンサーを設計しました。このセンサーは、730nm、815nm、680nm、850nmのフィルターを通過したハロゲンランプの作物冠層反射光をシリコンフォトセンサーで捕捉し、光スペクトル信号を電気エネルギー信号に変換します。光電変換後の信号強度は非常に弱いため、信号には必要な増幅とバッファリング処理が必要です。本研究では、T型バイアス増幅フィードバック回路を採用しました。この回路は、従来の増幅回路と比較して、構造上では2つの抵抗を追加しただけですが、機能上では温度ドリフトを減少させると同時に、より高い増幅倍率と優れた抗干渉性能を提供します。単一の増幅段では増幅倍率の要件を満たせない弱い信号に対して、T型フィードバック抵抗ネットワーク構造はより合理的な解決策を提供します。回路図は図4に示されています。

<div align = "center">    
    <img src="/zh/盆栽植物高通量表型监测系统/图4.1.jpg"  align = "middle" />
    <br></br>
    <img src="/zh/盆栽植物高通量表型监测系统/图4.2.jpg"  align = "middle" />
    <br></br>
    <img src="/zh/盆栽植物高通量表型监测系统/图4.3.jpg"  align = "middle" />
    <br></br>
    図4 スペクトルセンサー回路構造及び実物
</div>

#### **レーザーセンサー**

&emsp;開発サイクルとコスト要因を総合的に考慮して、本プロジェクトの植物三次元成像はレーザーセンサーを通じて点群データを取得することで実現されます。レーザーセンサーはSTP 23を採用し、その測距コア技術はDTOF（直接時間飛行）原理に基づいており、毎秒最大4545回の測距頻度を実現します。このセンサーの測距精度は0.3mmから8mmの範囲で、平均誤差は±45mmです。測定データはRA6M5マイクロコントローラのP501とP502ピンのuart5シリアルポートで受信され、CRC検証を通じてデータの正確性を検証します。この検証メカニズムは、データ伝送過程の正確性と信頼性を確保し、研究に安定したデータサポートを提供します。

### **制御モジュール**

#### **植物三次元モデリング**

&emsp;植物の異なる成長時期の三次元外形構造をより良く取得するために、本プロジェクトは瑞薩RA6M5マイクロコントローラを使用して、多アドレスUART4シリアルポート割り当て方式を通じて、単一のシリアルポートでステップディスクモーターとステップスクリュースライド台モーターの二つのモーターシステムの同期制御を実現します。システムの運行周期には重要な通信メカニズムが含まれており、毎秒サーバーに一回のハートビート信号を送信し、マイクロコントローラの現在の状態フラグを含みます。これらの状態フラグには、「スキャン可能」、「スキャン中」、「リセット中」が含まれます。システムの初期化段階では、モーターは持続的に下方向に移動し、ブロッキング保護メカニズムがトリガーされます。ブロッキング状態が検出されると、システムはシリアルポートを通じてブロッキング解除命令を発行し、モーターはブロッキング保護を解除し、状態フラグを「スキャン可能」に更新して、上位機システムが準備完了であることを通知します。

&emsp;上位機のスキャン開始命令を受信すると、システムは状態フラグを更新し、土壌センサーを土壌から自動的に引き抜き、スキャンプログラムを開始します。スキャン過程で、ステップモーターは最初にディスク上の植物を360度回転させ、マイクロコントローラは200ミリ秒ごとに上位機に角度クエリ命令を送信します。次に、受信した角度、現在の高さ、レーザー測距データはESP32モジュールを通じてHTTPリクエストの形式でサーバーに送信され、フロントエンドウェブページに表示されます。各スキャンラウンドが完了するたびに、スクリ