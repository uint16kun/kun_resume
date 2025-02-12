---
title: High-Throughput Phenotyping Monitoring System for Potted Plants
---

## <center>**Abstract**</center>

&emsp;With the continuous development of China's economy and the increasing standard of living, more and more people are paying attention to the cultivation of potted plants to improve indoor air quality. However, traditional potted plants are mainly cultivated manually, relying more on workers' experience, which is not only unscientific but also time-consuming and labor-intensive, and not suitable for large-scale economic production. To address this issue, this project has designed and implemented a High-Throughput Phenotyping Monitoring System for potted plants, which can achieve real-time monitoring of the growth status, soil nutrient conditions, plant height, and other key parameters of potted plants, and based on this, dynamically regulate water and fertilizer. The system mainly includes three parts: the sensing module, the control module, and the human-machine interaction module. Among them, the sensing module utilizes soil sensors, spectral sensors, laser sensors, and supporting self-developed peripheral functional circuits and mechanical structures to achieve real-time acquisition of high-throughput phenotypic parameters of potted plants. The control module uses the Renesas RA6M5 microcontroller as the control core, mainly responsible for receiving, processing, transmitting, displaying plant phenotypic data, and intelligent decision-making and control of water and fertilizer application. The human-machine interaction module includes a serial screen and a host computer interaction interface, where the serial screen interacts directly with the RA6M5 microcontroller through serial communication, capable of implementing test control and basic test result display functions. The host computer interaction interface runs through a cloud-deployed Vue progressive JavaScript framework, capable of displaying complex data results such as real-time three-dimensional structural modeling of plants. The preliminary development and application of this system can provide scientific and comprehensive guidance for the production of potted plants, better realizing the rapid development of digital agriculture.

## **Overview of the Work**

### **Design Background and Significance**

&emsp;With the continuous improvement of the living standards of Chinese residents, the public's concern for health, nature, and ecology is also increasing. More and more families choose to grow potted plants indoors, which not only helps to improve indoor air quality but also beautifies the living environment. Due to the popularity of online shopping and the significant improvement in delivery speed, it has further stimulated people's enthusiasm for purchasing potted plants. Therefore, the demand for industrialized, scaled, industrialized, and economic cultivation of potted plants has surged. However, traditional potted plant cultivation is mainly manual planting, which is time-consuming and labor-intensive, with poor timeliness, and has a significant hindering effect on the economicization of digital agriculture.

#### **Related Work**

&emsp;Monitoring parameters such as spectral vegetation indices, soil parameters, and plant height can effectively monitor and diagnose the real-time growth status of plants. There have been numerous studies on retrieving parameters such as nitrogen content, chlorophyll content, and leaf area size through spectral vegetation indices, while variable fertilization control through soil parameters is the cutting-edge technology of information agriculture development in China. In addition, phenotypic parameters such as plant height can reflect the current growth status of plants from a morphological perspective. Therefore, based on the current technical situation, high-throughput acquisition and analysis of the above parameters can better monitor the growth status of potted plants and intervene in a timely manner.

#### **Feature Description**

&emsp;This work uses the Renesas RA6M5 microcontroller as the control core, combined with soil sensors, spectral sensors, laser sensors, and supporting self-developed peripheral functional circuits and mechanical structures, to achieve real-time acquisition of soil parameters, spectral parameters, and three-dimensional models of a single potted plant. The main features include the following aspects:

- Using multiple interfaces and amplification circuits to achieve real-time collection of different types of data such as soil, spectrum, and plant morphology, with interfaces reserved for connecting other sensor devices to expand system functions.
- Designing two data test and display methods: serial screen and host computer interaction interface, with both on-site field viewing control and remote IoT interaction control modes, which can be applied to both household and industrial cultivation scenarios.

#### **Application Prospect Analysis**

&emsp;This work has basically completed the predetermined functions, capable of quickly acquiring soil parameters and spectral parameters of potted plants and real-time modeling of the plant's three-dimensional structure. However, limited by development time and sensor test accuracy, the existing system can only test a single potted plant. In future application scenarios, by cooperating with modern technologies and equipment such as automated conveyor mechanisms, lidar, depth cameras, and 5G/6G communication, it can fully form a complete set of potted plant pipeline cultivation monitoring system, greatly enhancing the level of national agricultural automation and digital economic benefits.

## **Design and Implementation of the Work**

&emsp;This work designs a High-Throughput Phenotyping Monitoring System for potted plants, which can achieve real-time monitoring of the growth status, soil nutrient conditions, plant height, and other key parameters of potted plants, and based on this, dynamically regulate water and fertilizer. The system structure is mainly divided into three parts: the sensing module, the control module, and the human-machine interaction module, as shown in Figure 1.

&emsp;The sensing module mainly consists of soil sensors, spectral sensors, and laser scanning components. Through the collaborative work of these sensors, detailed data about the plant and its growth environment are collected. The control module uses the Renesas RA6M5 microcontroller as the core, responsible for controlling the laser device and stepper motor to perform precise plant point cloud scanning. This module also is responsible for synchronously reading data from the spectral sensor and soil sensor, then performing necessary analysis and processing before uploading it to the cloud. The human-machine interaction module includes serial screen interaction and host computer web interaction, providing users with a friendly operation interface, allowing them to monitor data in real time and adjust system settings. The peripheral auxiliary functional circuits include lighting systems, power management, and the overall mechanical structure design of the system, which are key components to ensure the stable operation of the system and improve data accuracy.

&emsp;In summary, this monitoring system provides an efficient and automated solution for potted plant cultivation, suitable for precise monitoring and analysis of potted plant phenotypic data, supporting the development of plant science research and precision agriculture.

<div align="center">    
    <img src="/zh/盆栽植物高通量表型监测系统/图1.jpg" align="middle" />
    <br></br>
    Figure 1 Overall Structure Diagram of the High-Throughput Phenotyping Monitoring System for Potted Plants
</div>

### **Peripheral Auxiliary Circuits and Framework**

#### **Main Framework**

&emsp;The system framework of this project is constructed using angle aluminum materials, with an external dimension of a 1-meter-high, 0.5-meter-long, and 0.5-meter-wide cuboid. A stepper motor disc is installed at the bottom of the system, which not only supports the plant but also allows for a 360-degree uniform rotation, both for 3D model scanning and ensuring uniform lighting and irrigation for the plant. A 156W LRS switching power supply is installed at the upper left corner of the base, which converts 220V AC to 24V DC to power the entire system.

&emsp;The control compartment is assembled at the top left of the main framework, integrating all necessary microprocessor chips and serial screens, responsible for information display and real-time operation interaction. A 50W halogen lamp and spectral sensor are positioned in the middle of the top of the framework, which not only provide the required lighting but also monitor spectral data to assess the health status of the plant.

&emsp;A stepper lead screw slide table is installed on the left side of the framework, which integrates a distance measurement module, used to obtain distance and height data during the 3D modeling process. The soil sensor and irrigation system are designed and assembled on the other side of the framework, which can automatically insert and remove from the soil to achieve timed monitoring. Meanwhile, the test results of the soil sensor and the upper spectral sensor can provide decision-making information for the irrigation system to achieve real-time synchronized irrigation.

&emsp;The design and implementation of the entire system consider the convenience of operation and the high integration of technical functions, aiming to optimize the plant growth environment through precise control and meticulous monitoring, in order to achieve the best growth effect. The system mechanical structure and peripheral auxiliary circuits are shown in Figure 2.

<div align="center">    
    <img src="/zh/盆栽植物高通量表型监测系统/图2.png" align="middle" />
    <br></br>
    Figure 2 System Mechanical Structure and Peripheral Auxiliary Circuits
</div>

#### **Lighting**

&emsp;To achieve stable and accurate spectral sensor testing, the project uses a halogen lamp model 64445U (24V 50W). Halogen lamps have high energy conversion efficiency and a long lifespan, which can ensure the long-term stable operation of the system while reducing maintenance and operating costs. The light source has certain spectral characteristics of sunlight, providing linear full-band lighting. This lighting technology not only provides the necessary lighting conditions for plants but also ensures the uniformity and continuity of the light. In addition, this lighting scheme also facilitates the enhancement of spectral sensor capture of the required spectral signals for precise spectral data analysis.

#### **Power Supply**

&emsp;In this project, to meet the specific voltage requirements of various electronic components and ensure efficient power distribution, four sets of DC-DC open-source power supply modules are designed. These modules convert the 24V voltage provided by the main power supply Mingwei 350 LRS switching power supply into different voltages required by each component. The specific voltage configurations are as follows:

1. The first set of DC-DC modules provides 12V voltage, dedicated to powering the soil sensor.
2. The second set of DC-DC modules outputs 6V voltage, used to drive the servo motor.
3. The third set of DC-DC modules reduces 24V voltage to 5V, for use by the distance measurement module, 432 to TTL circuit, spectral T-type amplification circuit, water pump, and serial screen.
4. The fourth set of DC-DC modules is responsible for converting 24V voltage to 3.3V, for use by the microcontroller.

&emsp;Through the above configuration, the system can ensure that each component operates in its ideal voltage environment, thereby maximizing performance and stability. In addition, the use of DC-DC conversion technology can improve energy efficiency and reduce energy consumption, as these modules have relatively low energy loss during voltage conversion.

### **Sensing Module**

#### **Soil Sensor**

&emsp;Due to the limited project time, the soil sensor was not developed independently but selected a commercial soil sensor JXBS 3001 TR PH. This soil sensor can accurately measure soil temperature, humidity, conductivity, pH value, and the content of nitrogen, phosphorus, and potassium. During use, the microcontroller uses the 485 communication protocol to communicate with the soil sensor, relying on a TTL module to convert TTL levels into more interference-resistant 485 levels during communication. Then, the soil sensor data is transmitted to the serial port 8 of the Renesas RA6M5 microcontroller, specifically connected to the PA00 and P607 pins. To ensure the integrity of data transmission, the system uses the ModBus CRC16 verification mechanism. If data loss is detected, the problematic data will be automatically discarded. This efficient design not only ensures the accuracy of the data but also improves the reliability of the transmission. The soil sensor transmission process is shown in Figure 3.

<div align="center">    
    <img src="/zh/盆栽植物高通量表型监测系统/图3.jpg" align="middle" />
    <br></br>
    Figure 3 Soil Sensor Transmission Flowchart
</div>

#### **Spectral Sensor**

&emsp;The project designed a spectral sensor to obtain the real-time growth status of potted plants. The sensor captures the reflected light from the plant canopy transmitted through 730nm, 815nm, 680nm, and 850nm filters by a silicon photoelectric sensor, converting the spectral signal into an electrical energy signal through a photodiode. Given the very weak signal intensity after photoelectric conversion, it is necessary to amplify and buffer the signal. The T-type bias amplification feedback circuit is used in this article, which, compared to traditional amplification circuits, only adds two resistors in structure. However, it can provide higher amplification and better anti-interference performance while reducing temperature drift. For weak signals that cannot meet their amplification requirements with single-stage amplification, the T-type feedback resistor network structure provides a more reasonable solution. The circuit diagram is shown in Figure 4.

<div align="center">    
    <img src="/zh/盆栽植物高通量表型监测系统/图4.1.jpg" align="middle" />
    <br></br>
    <img src="/zh/盆栽植物高通量表型监测系统/图4.2.jpg" align="middle" />
    <br></br>
    <img src="/zh/盆栽植物高通量表型监测系统/图4.3.jpg" align="middle" />
    <br></br>
    Figure 4 Spectral Sensor Circuit Structure and Physical Object
</div>

#### **Laser Sensor**

&emsp;Considering the development cycle and cost factors, the plant three-dimensional imaging in this project is achieved through laser sensor-acquired point cloud data. The laser sensor selected is STP 23, whose ranging core technology is based on DTOF (direct time of flight) principle, capable of achieving a ranging frequency of up to 4545 times per second. The ranging accuracy of the sensor ranges from 0.3 to 8mm, with an average error maintained between ±45mm. The measurement data is received by the uart5 serial port on the P501 and P502 pins of the RA6M5 microcontroller and verified for correctness through CRC check. This verification mechanism ensures the accuracy and reliability of data transmission, thereby providing stable data support for research.

### **Control Module**

#### **Plant Three-Dimensional Modeling**

&emsp;To better obtain the three-dimensional shape structure of plants at different growth stages, this project uses the Renesas RA6M5 microcontroller to achieve synchronous control of the stepper disc motor and stepper lead screw slide table motor systems through a multi-address UART4 serial port allocation method. A key communication mechanism is included in the system's operating cycle: sending a heartbeat signal to the server once per second, containing the current status flag of the microcontroller. These status flags include "scannable," "scanning," and "resetting." During the system initialization phase, the motor will continue to move downward until a stall protection mechanism is triggered. Once stall status is detected, the system will issue a stall release command via the serial port, and the motor will then release the stall protection and update the status flag to "scannable" to notify the host computer that the system is ready.

&emsp;Upon receiving the start scan command from the host computer, the system updates the status flag and commands the soil sensor to automatically withdraw from the soil, then starts the scan program. During the scanning process, the stepper motor first drives the plant on the disc to rotate 360 degrees, and the microcontroller sends an inquiry angle command to the host computer every 200 milliseconds. Subsequently, the received angle, current height, and laser ranging data are sent to the server via the ESP32 module in the form of an HTTP request and displayed on the front-end web page. After each round of scanning, the lead screw slide table is raised by 0.8 cm, repeating this process until the ranging data exceeds the preset threshold for 40 consecutive points. After the scan is completed, the lead screw slide table returns to the starting position, updates the system status, and re-inserts the soil sensor in preparation for the next command.

&emsp;In addition, the system also includes a termination scan program. If a termination command is received from the host computer during the scanning process, the microcontroller will wait for the stepper motor to complete the current cycle, then command the lead screw slide table to return to the end and update the status flag. The design of this plant phenotyping monitoring system considers the flexibility of operation and the reliability of data transmission, providing strong technical support for plant science research and demonstrating its efficiency and applicability in practical applications. The three-dimensional modeling operation flow is shown in Figure 5.

<div align="center">    
    <img src="/zh/盆栽植物高通量表型监测系统/图5.jpg" align="middle" />
    <br></br>
    Figure 5 Three-Dimensional Modeling Operation Flow
</div>

#### **Water and Fertilizer Application System**

&emsp;When the system receives the watering command from the host computer, it will initiate a series of automated processes. First, the soil sensor will be extracted from the soil to prepare for the irrigation process. Then, the irrigation system is activated to start watering the soil. During this process, the stepper motor will also be triggered to perform a full week of rotation to support the operation of the irrigation machinery. After the irrigation is completed, the soil sensor will be re-inserted into the soil for re-testing of the humidity to ensure that the irrigation effect meets the expected standards. The water and fertilizer application operation flow is shown in Figure 6.

<div align="center">    
    <img src="/zh/盆栽植物高通量表型监测系统/图6.jpg" align="middle" />
    <br></br>
    Figure 6 Water and Fertilizer Application Operation Flow
</div>

#### **Spectral Sensor Data Processing**

&emsp;The High-Throughput Phenotyping Monitoring System for potted plants uses the Normalized Difference Vegetation Index (NDVI) and Ratio Vegetation Index (RVI) as indicators of crop growth status. NDVI and RVI are determined by the reflectance values of the near-infrared and red channels. Since chlorophyll in plants absorbs red light during photosynthesis, plants with better growth absorb more red light and reflect more near-infrared light, so NDVI and RVI have a high correlation with Leaf Area Index (LAI) and chlorophyll content. They can intuitively reflect the content of plant biomass. Their calculation formulas are as follows:

$$ 
NDVI = \frac{NIR - RED}{NIR + RED} \tag{1} 
$$

$$ 
RVI = \frac{NIR}{RED}  \tag{2}
$$

**NIR**: Near-infrared band reflectance value

**RED**: Red band reflectance value

### **Human-Machine Interaction Interface Design**

#### **Serial Screen Interaction System**

&emsp;The lower-level human-machine interaction is conducted through a serial screen. This system uses the Taocrystal TJC8048X570_011CS serial screen to achieve efficient display and control of agricultural monitoring data. On the serial screen, users can view in real time the key parameters collected from the soil sensor, such as nitrogen, phosphorus, and potassium content, as well as pH value, temperature, humidity, and conductivity. In addition, the system can also display data processed by the spectral sensor, including two sets of Normalized Difference Vegetation Index (NDVI) (730,815) and NDVI (680,850), as well as two sets of Ratio Vegetation Index (RVI) (730,815) and RNV (680,850).

&emsp;The system not only has advanced display functions but also supports complex control functions. Users can control the start and interruption of 3D scanning through the serial screen. In addition, users can also set the working threshold of the automatic watering system and decide its on/off state, achieving precise control and adjustment. All these data and control instructions communicate with the microcontroller through the serial port, ensuring the efficiency and response speed of the system. The serial screen interaction system partial display interface is shown in Figure 7.

<div align="center">    
    <img src="/zh/盆栽植物高通量表型监测系统/图7.jpg" align="middle" />
    <br></br>
    Figure 7 Serial Screen Interaction System
</div>

#### **Web and Server-Side**

&emsp;Considering the application of batch IoT cultivation mode in the process of potted plant cultivation, this project designs and implements a server-side human-machine interaction interface based on the Flask framework to handle requests sent by the front-end and provide related services. Flask is a lightweight Web framework that supports RESTful API style, making it convenient for developers to build Web services that conform to RESTful design principles. We use Flask's built-in HTTP server to handle network requests and use JSON format for front-end and back-end data interaction. In addition, to solve the Cross-Origin Resource Sharing (CORS) problem, we introduce the Flask-CORS plugin. In terms of system deployment, the Flask application can be deployed in any environment that supports Python, such as a virtual machine or cloud server, by configuring the host and port parameters to specify the listening address and port of the service.

The detailed implementation of the server-side design includes the following key points:
1. Network Communication: Using Flask's built-in HTTP server to handle network requests from the front-end.
2. Data Interaction: Using JSON format for efficient front-end and back-end data interaction.
3. Cross-Origin Resource Sharing: Handling possible cross-origin requests through the Flask CORS plugin to ensure secure resource sharing.
4. Deployment Method: Deploying to any server environment that supports Python and starting the service through appropriate configuration.

&emsp;At the same time, in the front-end design, we chose the Vue.js progressive JavaScript framework to build a responsive user interface. Vue.js supports component-based development, with a concise API and a rich ecosystem (including official plugins such as Vue Router, Vuex, Vue CLI, and various third-party libraries) greatly enhancing development efficiency and application performance. The specific implementation details are as follows:
1. Front-end Framework: Using Vue.js to build a dynamic, responsive user interface.
2. 3D Point Cloud Display: Using the Three.js library to generate and display 3D point clouds, providing an intuitive view of plant data.
3. Chart Display: Using the ECharts library to graphically display plant data.
4. Network Requests: Sending HTTP requests to interact with the back-end through the Axios library.
5. UI Component Library: Using Element Plus to accelerate interface construction and enhance user interaction experience.

&emsp;In addition, to meet the needs of multi-platform applications, we use Electron to package the Vue.js project into a desktop executable file, and use the uni-app framework to package it into a mobile application, achieving cross-platform application development. The powerful functions of Electron and uni-app provide convenience for building applications with native experience, thereby meeting the needs of different terminal users. The host computer interaction interface is shown in Figure 8.

<div align="center">    
    <img src="/zh/盆栽植物高通量表型监测系统/图8.jpg" align="middle" />
    <br></br>
    Figure 8 Host Computer Data Display Interface
</div>

## **Work Testing and Analysis**

### **Soil Tester Test Results**

&emsp;Based on the designed system, various sensor results were tested, among which the soil test sensor tested the data results at different time nodes from 7:00 AM to 9:00 PM, as shown in Table 1.

<div align="center">    
    Table 1 Daily Variation Test Results of Soil Sensor Parameters
    <br></br>
    <img src="/zh/盆栽植物高通量表型监测系统/表1.jpg" align="middle" />
</div>

&emsp;According to the temperature test results, the temperature reached its highest value at 2:00 PM, and the daily temperature variation results met expectations. In addition, other environmental parameters such as pH value, humidity, conductivity, and the content of nitrogen, phosphorus, and potassium remained stable overall. The daily variation trends of different parameters are shown in Figure 9. As can be seen from the figure, there are certain small fluctuations in the above parameters during the testing process, but they are within an acceptable error range. The reasons for the fluctuations may be related to minor differences in experimental operations.

<div align="center">    
    <img src="/zh/盆栽植物高通量表型监测系统/图9.1.png" align="middle" />
    <img src="/zh/盆栽植物高通量表型监测系统/图9.2.png" align="middle" />
    <br></br>
    Figure 9 Daily Variation Trends of Different Parameters
</div>

### **Spectral Sensor Data**

&emsp;In addition to soil data, the spectral sensor was used to obtain the Normalized Difference Vegetation Index (NDVI) and Ratio Vegetation Index (RVI) to assess the health status of the plant. Due to the high price of standard spectral testing instruments and limited testing time, the project only tested the RVI (730,815), RVI (680,850), NDVI (730,815), and NDVI (680,850) results for the potted plant Bird of Paradise, as shown in Table 2. By comparing with existing agricultural spectral monitoring literature, the test results are basically within the range that can reflect the nutritional status of the plant. The specific effect will be further improved by comparing with standard instrument tests and the results of indoor physicochemical analysis experiments.

<div align="center">    
    <img src="/zh/盆栽植物高通量表型监测系统/表2.jpg" align="middle" />
    Table 2 Spectral Sensor Test Results
</div>

### **Plant Three-Dimensional Model Construction and Testing**

&emsp;According to the designed three-dimensional imaging system, a three-dimensional model of the Bird of Paradise plant was constructed, and the modeling results are shown in Figure 10. From the results in the figure, it can be seen that the designed system can better achieve three-dimensional morphological modeling of the plant. However, due to the open design, the system's robustness to environmental influences is not high, and it is easily affected by environmental factors. Theoretically, this problem can be solved by adding light-blocking panels around. In addition, we calculated the plant height from the point cloud data obtained by the laser rangefinder and compared it with the manual test results. The measurement results showed that the plant height obtained by point cloud calculation was 39.2 cm, while the actual measurement value obtained by the ruler measurement method was 38.5 cm. The error was only 0.7 cm, which is completely within the allowable error range for scientific research.

<div align="center">    
    <img src="/zh/盆栽植物高通量表型监测系统/图10.jpg" align="middle" />
    Figure 10 Three-Dimensional Scanning Point Cloud Modeling Results
</div>

## **Innovation Statement**
This project has the following features and innovations:
1. Developed a High-Throughput Phenotyping Monitoring System for potted plants, solving the collaborative application of multiple sensor devices such as soil sensors, spectral sensors, and laser sensors, achieving real-time monitoring, processing, and transmission of multi-source information such as plant growth status, soil nutrient conditions, and three-dimensional phenotypic parameters during potted plant cultivation, and based on this, achieving dynamic regulation of water and fertilizer.
2. Overcame the limitations of potted plant cultivation relying too much on manual intervention, innovatively adopting two methods of serial screen lower-level human-machine interaction interface and host computer human-machine interaction interface to achieve interaction and control of the system. Broadened the cultivation methods and channels of potted plants in batches, economically, and IoT, providing technical reference and practical system model support for the subsequent industrial development of the industry.
3. Proposed a plant three-dimensional model construction method based on laser sensors, which can be better applied to potted plant cultivation and greenhouse crop cultivation, reducing the technical cost of three-dimensional model construction, and this method can accurately obtain plant height parameters. According to subsequent development, theoretically, it can further obtain phenotypic parameter results such as leaf inclination angle and stem thickness.

## **Conclusion**

&emsp;In the nearly one-month development time, through the collaborative cooperation of the three members of the project development team, the development of the High-Throughput Phenotyping Monitoring System for potted plants has been basically achieved. The specific summary is as follows:
1. According to the discussion results at the beginning of the project, the peripheral auxiliary circuits and mechanical framework of the system were designed, built, and optimized. During this period, basic framework structures were completed through mechanical processing, and various detailed mechanical parts were designed and completed through shapr 3D mechanical design and 3D printing, including but not limited to the filter circuit structure of the spectral sensor, the fixed structure of the laser sensor, the rotating structure of the potted plant disc, the water and fertilizer irrigation structure, etc., ultimately achieving better cooperation and application between different structures.
2. Using the Renesas RA6M5 microcontroller as the core controller, the programming tasks of multiple control units including sensor data acquisition, digital-to-analog conversion, data analysis and processing, transmission, and stepper motor drive were realized. The communication methods and protocols used include but are not limited to serial ports, 485, and HTTP. Due to the large number of functions designed by the system and the need for a large amount of cross-coordination between different functions, after continuous error correction and correction, a relatively stable system software programming scheme was finally completed.
3. For different application scenarios such as household single potted plant cultivation maintenance and enterprise-level scaled and economic potted plant production, the host computer human-machine interaction interface is the main and the serial screen human-machine interaction method is the auxiliary, designing two human-machine interaction modes. Among them, the serial screen interaction interface has basic functions such as sensor test result display and test control, while the host computer interaction interface can also be used to display the real-time modeling results of the plant three-dimensional model in addition to basic functions.
4. Due to the limited start time and production cost, although the designed system has been able to better complete the scheduled tasks, there is still room for improvement in test accuracy and test speed. It is hoped that the development of this system can provide some reference significance for the development of potted plants in batches and IoT.
