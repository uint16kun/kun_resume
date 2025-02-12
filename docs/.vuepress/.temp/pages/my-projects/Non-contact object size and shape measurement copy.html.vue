<template><div><h2 id="项目任务和要求" tabindex="-1"><a class="header-anchor" href="#项目任务和要求"><span><strong>项目任务和要求</strong></span></a></h2>
<h3 id="任务" tabindex="-1"><a class="header-anchor" href="#任务"><span><strong>任务</strong></span></a></h3>
<p> 设计并制作一个非接触式物体形状和尺寸自动测量装置，装置的布置图如
图 1 所示，测量装置放置在图中所示的测量装置区内，被测目标放置在图中被测
目标放置区内，装置能测量被测目标的形状、尺寸、测量头中心点与被测目标之
间的距离等参数，并用激光束指示出被测目标的中心位置。背景板竖立放置在目
标后 5cm 处，图 2 为目标和背景板放置示意图。</p>
<div align = "center">
    单位：mm
    <br></br>    
    <img src="/zh/非接触物体尺寸形态测量/图1测试场景布置图.png"  align = "middle" />
    <br></br>
    图1 测试场景布置图
    <img src="/zh/非接触物体尺寸形态测量/图2目标板和背景板放置示意图.png"  align = "middle" />
    <br></br>
    图2 目标板和背景板放置示意图
</div>
<h3 id="要求" tabindex="-1"><a class="header-anchor" href="#要求"><span><strong>要求</strong></span></a></h3>
<ol>
<li>
<p>选择某规则形状的平面目标，放在被测目标放置区的中心线位置
上，按测量键后开始测量，完成测量后，在装置上显示出该目标物体边长（如
果目标选择的是圆形目标，显示出直径）、几何形状和目标与测量头的距离，
整个测量和指示过程要求总用时不超过 2 分钟。</p>
</li>
<li>
<p>更换目标板，在摆放区内中心线上放置目标和背景板，显示距离、
形状、尺寸（边长），要求测量用时不超过 2 分钟。</p>
</li>
<li>
<p>自动寻找目标测量：测量头处于中心线方向（0º）， 目标摆放在目标
放置区内任选位置；按测试键后，装置自动寻找目标，测量并显示距离、形状、
尺寸、用激光笔指示几何中心，用时不超过 3 分钟，越短越好。</p>
</li>
<li>
<p>立体目标测量：随机抽取篮球、排球、足球中一个，重复 3 测
量，判断球类品种、测量与球表面最近距离。用时不超过 2 分钟。</p>
</li>
</ol>
<h2 id="实现方案" tabindex="-1"><a class="header-anchor" href="#实现方案"><span><strong>实现方案</strong></span></a></h2>
<h3 id="摘要" tabindex="-1"><a class="header-anchor" href="#摘要"><span><center><strong>摘要</strong></center></span></a></h3>
<p> 本设计的非接触式物体形状和尺寸自动测量装置以ESP32-S3单片机为整个系统的控制核心，辅以相关的外围电路，设计出可以自动测量被测目标的形状、尺寸、测量头中心点与被测目标之间的距离等参数，并用激光束指示出被测目标的中心位置。该系统由按键、电机驱动模块、电机、通信模块、OLED显示器、电源模块、识别模块等构成。在硬件电路上，使用摄像头识别被测目标的形状、尺寸、测量头中心点与被测目标之间的距离等参数，ESP32-S3单片机检测实时数据，并在显示屏上显示出目标物体边长（如果目标选择的是圆形，显示出直径）、几何形状和目标与测量头的距离。在软件方面，使用C++编程、python3.6，通过对单片机程序实现对目标物体边长、几何形状、目标与测量头的距离的测量。</p>
<h3 id="方案论证" tabindex="-1"><a class="header-anchor" href="#方案论证"><span><strong>方案论证</strong></span></a></h3>
<h4 id="降压选择" tabindex="-1"><a class="header-anchor" href="#降压选择"><span><strong>降压选择</strong></span></a></h4>
<p><strong>方案一</strong> ：采用<strong>线性稳压电源</strong>（LDO）。低压差线性稳压器的突出优点是具有最低的
成本，最低的噪声和最低的静态电流。它的外围器件也很少，通常只有一两个旁路电容。但线性电源的效率低，发热量大，需要更大的散热面积，只适用于低压差转换和一些要求电源电压稳定的场合，诸如供给单片机等器件作为电源。</p>
<p><strong>方案二</strong> ：采用<strong>开关电源</strong>。DC-DC包括boost（升压）、buck（降压）、Boost/buck（升/降压）和反相结构，具有高效率、高输出电流、低静态电流等特点。相比于LDO，电源开关体积小，适用于高的压差转化。故本系统采用电源开关。</p>
<h4 id="图像处理模块" tabindex="-1"><a class="header-anchor" href="#图像处理模块"><span><strong>图像处理模块</strong></span></a></h4>
<p><strong>方案一</strong> ：采用<strong>OpenMv</strong>。OpenMV是一款专注于机器视觉的开源模块，它基于CPython编程语言，提供了丰富的图像处理和计算机视觉功能。OpenMv拥有人脸识别、拍照、视屏录制等功能，但它做不了复杂的算法，运行时间不能过长。</p>
<p><strong>方案二</strong> ：采用<strong>K210</strong>。K210芯片可以用于各种嵌入式人工智能应用，可以实现实时图像处理、目标检测、人脸识别、语音识别和自然语言处理等功能。K210芯片的主要优势是低功耗和较小的体积，但在在计算能力和图形处理能力上稍逊一筹。</p>
<p><strong>方案三</strong> ： 采用<strong>Jetson</strong>。Jetson平台是基于NVIDIA的GPU架构，提供了丰富的软件支持和开发工具，使开发者可以更轻松地进行应用开发和优化。相比于OpenMv和K210，Jetson拥有更强大的计算能力和图形处理能力，故本系统采用Jetson。</p>
<h4 id="电机选择" tabindex="-1"><a class="header-anchor" href="#电机选择"><span><strong>电机选择</strong></span></a></h4>
<p><strong>方案一</strong> ：采用舵机。舵机是一种具有位置反馈的电机，它可以精确控制电机角
度。舵机通常由一个直流电机、一个位置传感器和一个控制电路组成，广泛应用于机器人、航模、自动化设备等领域，可以实现精确的位置控制。</p>
<p><strong>方案二</strong> ：采用无刷电机。无刷电机它通过电子换向器来控制电机的转子位置。无刷电机通常由一个转子和一个定子组成，转子上的永磁体和定子上的线圈之间通过电子换向器进行交替激励，从而实现电机的转动，它具有高效率、高转矩和高速度的特点。总体来说，舵
机更适用于精确的位置控制，无刷电机更适用于高效率、高转矩和高速度的应用，故本系统采用无刷电机。</p>
<h4 id="电机控制选择" tabindex="-1"><a class="header-anchor" href="#电机控制选择"><span><strong>电机控制选择</strong></span></a></h4>
<p><strong>方案一</strong> ：采用<strong>六步换相位</strong>。六步换相位是一种简单的电机控制方法，它通过依
次切换电机的三个相位来控制电机的转动，适用于一些简单的电机控制应用。</p>
<p><strong>方案二</strong> ：采用<strong>SVPWM</strong>。SVPWM是一种高级的电机控制方法，它通过调整电机的电压和频率来控制电机的转速和转矩，具有较高的控制精度和效率，适用于一些对电机控制性能要求较高的应用，故本系统采用SVPWM实现对电机的控制。</p>
<h3 id="系统设计与实现" tabindex="-1"><a class="header-anchor" href="#系统设计与实现"><span><strong>系统设计与实现</strong></span></a></h3>
<p>系统的总体构成框图如图1。</p>
<div align = "center">    
    <img src="/zh/非接触物体尺寸形态测量/图1.png"  align = "middle" />
    <br></br>
    图1
</div>
<h4 id="降压电路设计" tabindex="-1"><a class="header-anchor" href="#降压电路设计"><span><strong>降压电路设计</strong></span></a></h4>
<p> 使用开关电源进行降压是一种常见的电源转换方式，可以将高电压转换
为低电压供应给负载。降压型开关电源通常包括输入滤波电路、开关管、变压器、整流电路、输出滤波电路和反馈控制电路等组成。降压型开关电源的基本工作原理是通过开关管的开关动作，将输入电压切换成高频脉冲信号，然后通过变压器和整流电路将其转换为稳定的低电压输出，由此将电源的12V转变为5V。</p>
<h4 id="控制无刷电机设计" tabindex="-1"><a class="header-anchor" href="#控制无刷电机设计"><span><strong>控制无刷电机设计</strong></span></a></h4>
<p> 首先连接电机，将无刷电机的电源和控制信号线连接到ESP32的相应引
脚。然后在ESP32的代码中配置GPIO引脚的工作模式和电平，使用SVPWM
来实现无刷电机的控制，最后通过电机控制库提供的函数来控制电机的转动。</p>
<h4 id="激光测距设计" tabindex="-1"><a class="header-anchor" href="#激光测距设计"><span><strong>激光测距设计</strong></span></a></h4>
<p> 激光测距是一种利用激光技术进行距离测量的方法。它通过发射一束激
光脉冲，并测量激光脉冲从发射到接收的时间来计算距离。激光测距仪通常
由激光发射器、接收器、时钟和计算器等组成。激光发射器发射激光脉冲，
接收器接收反射的激光脉冲，并将接收到的信号转换为电信号。时钟用于测
量激光脉冲的时间，计算器用于计算距离。</p>
<h4 id="图像处理算法设计" tabindex="-1"><a class="header-anchor" href="#图像处理算法设计"><span><strong>图像处理算法设计</strong></span></a></h4>
<p> 用模板匹配和圆霍夫变换，以及两者相结合来实现对圆形、长方形、三角
形的判断和识别。
圆霍夫变换用于检测图像中的圆形。圆霍夫变换通过在图像中搜索圆形和直线的参数空间，来寻找与输入图像中的圆形和直线相匹配的参数。在OpenCV库中，可以使用HoughCircles函数来实现圆霍夫变换算法。
模板匹配和圆霍夫变换相结合来实现对三角形和长方形的检测。首先，可以使用模板匹配来检测和识别图像中的三角形和长方形的边缘。然后，可以使用圆霍夫变换来检测和识别图像中的圆形和直线，从而进一步确定三角形和长方形的位置和形状。</p>
<h4 id="通信模块设计" tabindex="-1"><a class="header-anchor" href="#通信模块设计"><span><strong>通信模块设计</strong></span></a></h4>
<p> 通信使用wifi通过tcp协议是一种常见的网络通信方式。tcp协议是一种可靠的传输协议，它能够保证数据的可靠传输，确保数据不会丢失或损坏。而使用 wifi作为通信媒介，可以提供高速的数据传输速度和稳定的连接质量。使用json数据格式化传送数据可以方便数据解析。json是一种轻量级的数据交换格式，它具有良好的可读性和可扩展性，可以方便地进行数据解析和处理。在网络通信中，使用json格式化数据可以减少数据传输的大小，提高数据传输的效率。</p>
<h3 id="测试方案及测试结果分析" tabindex="-1"><a class="header-anchor" href="#测试方案及测试结果分析"><span><strong>测试方案及测试结果分析</strong></span></a></h3>
<h4 id="测试仪器" tabindex="-1"><a class="header-anchor" href="#测试仪器"><span><strong>测试仪器</strong></span></a></h4>
<p>示波器、电压表、可调电源、数字发生器、卷尺。</p>
<h4 id="测试方法" tabindex="-1"><a class="header-anchor" href="#测试方法"><span><strong>测试方法</strong></span></a></h4>
<h5 id="距离测试" tabindex="-1"><a class="header-anchor" href="#距离测试"><span>距离测试</span></a></h5>
<p> 使用单目相机测距。图中f是摄像头的焦距，c是镜头光心。物体发出的
光经过相机的光心，然后成像于图像传感器或者也可以说是像平面上，如果设物体所在平面与相机平面的距离为d，物体实际高度为H，在传感器上的高度为h，H一定要是已知的，我们才能求得距离d。由相似三角形得到他们的关系：d/H=f/h。单目相机测距原理图如图2所示</p>
<div align = "center">    
    <img src="/zh/非接触物体尺寸形态测量/图2.png"  align = "middle" />
    <br></br>
    图2
</div>
<h5 id="电路测试" tabindex="-1"><a class="header-anchor" href="#电路测试"><span>电路测试</span></a></h5>
<p> 在测试电路时，使用示波器观察和分析电路中的信号波形，显示电压和电流随时间变化的波形图，帮助我们了解电路的工作状态和性能。使用电压表测量电路中的电压。使用可调电源提供可调的电压和电流，因为可调电源通常具有可调的输出电压和电流限制，并具有过载和短路保护功能，所以可以用于测试和供电电路中的各种元件和设备。使用数字发生器产生可调的信号。数字发生器通常具有多个输出通道和可调的输出参数，可以用于测试和调试电路中的各种信号源和信号处理器。</p>
<h4 id="测试结果" tabindex="-1"><a class="header-anchor" href="#测试结果"><span><strong>测试结果</strong></span></a></h4>
<p> 在设计的自动测量装置各项指标都满足的情况下对各项要求进行多次测
试。选择某规则形状的平面目标，放在被测目标放置区的中心线位置上，按
测量按键后开始测量，同时秒表开始记时，测量结束后，用直尺测量实际值，
与测量值进行对比，观察误差值以及测量时间是否超过规定时间。如图3所
示</p>
<table>
<thead>
<tr>
<th style="text-align:center"></th>
<th style="text-align:center">测量距离（mm）</th>
<th style="text-align:center">测量边长或半径(mm)</th>
<th style="text-align:center">实际边长(mm)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">长方形</td>
<td style="text-align:center">2801</td>
<td style="text-align:center">190/110</td>
<td style="text-align:center">498/293</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">2753</td>
<td style="text-align:center">193/110</td>
<td style="text-align:center">408/293</td>
</tr>
<tr>
<td style="text-align:center">三角形</td>
<td style="text-align:center">2283</td>
<td style="text-align:center">228/227/231</td>
<td style="text-align:center">500/500/500</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">2513</td>
<td style="text-align:center">219/208/208</td>
<td style="text-align:center">500/500/500</td>
</tr>
<tr>
<td style="text-align:center">圆形</td>
<td style="text-align:center">2301</td>
<td style="text-align:center">112</td>
<td style="text-align:center">250</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">2787</td>
<td style="text-align:center">97</td>
<td style="text-align:center">250</td>
</tr>
</tbody>
</table>
<h4 id="误差原因" tabindex="-1"><a class="header-anchor" href="#误差原因"><span><strong>误差原因</strong></span></a></h4>
<p> 实验中使用的仪器可能存在固有的误差，可能由于仪器的不完美性能、校准不准确或老化等原因导致。实验环境的变化可能会对实验结果产生影响。在进行实验时可能会出现一些误差，例如读数误差、仪器放置不准确等，可能是由于技术熟练程度、操作不规范或疏忽等原因导致的。实验设计的不完善或者假设的不准确性可能导致误差。例如，忽略了一些影响因素、样本数量不足等。</p>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span><strong>总结</strong></span></a></h3>
<p> 本系统以esp32为控制核心，设计出可以自动测量被测目标的形状、尺寸、测量头中心点与被测目标之间的距离等参数，并用激光束指示出被测目标的中心位置。本系统较好地完成了题目基本部分及发挥部分的所有要求，系统整体性能良好，但由于时间关系，并未较好的实现用激光笔指示几何中心，系统有待于进一步改进和完善。</p>
</div></template>


