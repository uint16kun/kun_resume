import{_ as n,a as s,b as i,c as a,d as l}from"./图5-DF1RuCaS.js";import{_ as e,c,o as d,d as p}from"./app-C7npUbAG.js";const v={},r=p('<h2 id="hardware-design" tabindex="-1"><a class="header-anchor" href="#hardware-design"><span><strong>Hardware Design</strong></span></a></h2><h3 id="six-channel" tabindex="-1"><a class="header-anchor" href="#six-channel"><span><strong>Six-Channel</strong></span></a></h3><img src="'+n+'" align="middle"><img src="'+s+'" align="middle"><h3 id="three-channel" tabindex="-1"><a class="header-anchor" href="#three-channel"><span><strong>Three-Channel</strong></span></a></h3><img src="'+i+'" align="middle"><img src="'+a+'" align="middle"><img src="'+l+`" align="middle"><h2 id="software-design" tabindex="-1"><a class="header-anchor" href="#software-design"><span><strong>Software Design</strong></span></a></h2><p><a href="https://github.com/uint16kun/kun_project/blob/main/lib_kun/Ardunio/foc_kun/v1.0/foc_kun.cpp" target="_blank" rel="noopener noreferrer">Source Code on GitHub</a></p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre class="language-c++"><code><span class="line">#include &quot;foc_kun.h&quot;</span>
<span class="line">foc_kun::foc_kun(void)</span>
<span class="line">{</span>
<span class="line">}</span>
<span class="line">foc_kun::foc_kun(uint8_t AH_temp, uint8_t AL_temp, uint8_t BH_temp, uint8_t BL_temp, uint8_t CH_temp, uint8_t CL_temp)</span>
<span class="line">{</span>
<span class="line">    AH = AH_temp;</span>
<span class="line">    AL = AL_temp;</span>
<span class="line">    BH = BH_temp;</span>
<span class="line">    BL = BL_temp;</span>
<span class="line">    CH = CH_temp;</span>
<span class="line">    CL = CL_temp;</span>
<span class="line">    pwm_mode = 0;</span>
<span class="line">    pwm_max = 1;</span>
<span class="line">    for (uint8_t i = 0; i &lt; pwm_resolution; i++)</span>
<span class="line">    {</span>
<span class="line">        pwm_max *= 2;</span>
<span class="line">    }</span>
<span class="line">    pwm_max--;</span>
<span class="line">}</span>
<span class="line">void foc_kun::begin(uint8_t AH_channel_temp, uint8_t BH_channel_temp, uint8_t CH_channel_temp)</span>
<span class="line">{</span>
<span class="line">    pwm_mode = 0;</span>
<span class="line">    AH_channel = AH_channel_temp;</span>
<span class="line">    BH_channel = BH_channel_temp;</span>
<span class="line">    CH_channel = CH_channel_temp;</span>
<span class="line">    pinMode(AL, OUTPUT);</span>
<span class="line">    pinMode(BL, OUTPUT);</span>
<span class="line">    pinMode(CL, OUTPUT);</span>
<span class="line">    ledcSetup(AH_channel, pwm_mode, pwm_resolution);</span>
<span class="line">    ledcSetup(BH_channel, pwm_mode, pwm_resolution);</span>
<span class="line">    ledcSetup(CH_channel, pwm_mode, pwm_resolution);</span>
<span class="line">    ledcAttachPin(AH, AH_channel);</span>
<span class="line">    ledcAttachPin(BH, BH_channel);</span>
<span class="line">    ledcAttachPin(CH, CH_channel);</span>
<span class="line">}</span>
<span class="line">void foc_kun::six_step_clear(void)</span>
<span class="line">{</span>
<span class="line">    ledcWrite(AH_channel, 0);</span>
<span class="line">    ledcWrite(BH_channel, 0);</span>
<span class="line">    ledcWrite(CH_channel, 0);</span>
<span class="line">    digitalWrite(BL, LOW);</span>
<span class="line">    digitalWrite(AL, LOW);</span>
<span class="line">    digitalWrite(CL, LOW);</span>
<span class="line">}</span>
<span class="line">void foc_kun::six_step_commutation(uint8_t num)</span>
<span class="line">{</span>
<span class="line">    six_step_clear();</span>
<span class="line">    switch (num)</span>
<span class="line">    {</span>
<span class="line">    case 0:</span>
<span class="line">        six_step_clear();</span>
<span class="line">        ledcWrite(AH_channel, six_step_speed);</span>
<span class="line">        digitalWrite(BL, HIGH);</span>
<span class="line">        break;</span>
<span class="line">    case 1:</span>
<span class="line">        six_step_clear();</span>
<span class="line">        ledcWrite(AH_channel, six_step_speed);</span>
<span class="line">        digitalWrite(CL, HIGH);</span>
<span class="line">        break;</span>
<span class="line">    case 2:</span>
<span class="line">        six_step_clear();</span>
<span class="line">        ledcWrite(BH_channel, six_step_speed);</span>
<span class="line">        digitalWrite(CL, HIGH);</span>
<span class="line">        break;</span>
<span class="line">    case 3:</span>
<span class="line">        six_step_clear();</span>
<span class="line">        ledcWrite(BH_channel, six_step_speed);</span>
<span class="line">        digitalWrite(AL, HIGH);</span>
<span class="line">        break;</span>
<span class="line">    case 4:</span>
<span class="line">        six_step_clear();</span>
<span class="line">        ledcWrite(CH_channel, six_step_speed);</span>
<span class="line">        digitalWrite(AL, HIGH);</span>
<span class="line">        break;</span>
<span class="line">    case 5:</span>
<span class="line">        six_step_clear();</span>
<span class="line">        ledcWrite(CH_channel, six_step_speed);</span>
<span class="line">        digitalWrite(BL, HIGH);</span>
<span class="line">        break;</span>
<span class="line">    default:</span>
<span class="line">        break;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">void foc_kun::park_inverse_transformation(void)</span>
<span class="line">{</span>
<span class="line">    cosine = cos(theta);</span>
<span class="line">    sine = sin(theta);</span>
<span class="line">    u_alpha = u_d * cosine - u_q * sine;</span>
<span class="line">    u_beta = u_q * cosine + u_d * sine;</span>
<span class="line">}</span>
<span class="line">void foc_kun::clarke_inverse_transformation(void)</span>
<span class="line">{</span>
<span class="line">    u_a = u_alpha;</span>
<span class="line">    u_b = (-1 / 2) * u_alpha + 0.8660254037844386 * u_beta;</span>
<span class="line">    u_c = (-1 / 2) * u_alpha - 0.8660254037844386 * u_beta;</span>
<span class="line">}</span>
<span class="line">void foc_kun::park_transformation(void)</span>
<span class="line">{</span>
<span class="line">    i_d = i_alpha * cosine + i_beta * sine;</span>
<span class="line">    i_q = i_beta * cosine - i_alpha * sine;</span>
<span class="line">}</span>
<span class="line">void foc_kun::clarke_transformation(void)</span>
<span class="line">{</span>
<span class="line">    i_alpha = i_a;</span>
<span class="line">    i_beta = (i_a + i_b * 2) * 0.5773502691896258;</span>
<span class="line">}</span>
<span class="line">void foc_kun::svpwm(void)</span>
<span class="line">{</span>
<span class="line">    ts = 1;</span>
<span class="line">    u1 = u_beta;</span>
<span class="line">    u2 = -0.8660254037844386 * u_alpha - u_beta / 2;</span>
<span class="line">    u3 = 0.8660254037844386 * u_alpha - u_beta / 2;</span>
<span class="line">    uint8_t sector = (u1 &gt; 0.0) + ((u2 &gt; 0.0) &lt;&lt; 1) + ((u3 &gt; 0.0) &lt;&lt; 2);</span>
<span class="line">    switch (sector)</span>
<span class="line">    {</span>
<span class="line">    case 5:</span>
<span class="line">        t4 = u3;</span>
<span class="line">        t6 = u1;</span>
<span class="line">        t_sum = t4 + t6;</span>
<span class="line">        if (t_sum &gt; ts)</span>
<span class="line">        {</span>
<span class="line">            k_svpwm = ts / t_sum;</span>
<span class="line">            t4 = k_svpwm * t4;</span>
<span class="line">            t6 = k_svpwm * t6;</span>
<span class="line">        }</span>
<span class="line">        t7 = (ts - t4 - t6) / 2;</span>
<span class="line">        t_a = t4 + t6 + t7;</span>
<span class="line">        t_b = t6 + t7;</span>
<span class="line">        t_c = t7;</span>
<span class="line">        break;</span>
<span class="line">    case 1:</span>
<span class="line">        t2 = -u3;</span>
<span class="line">        t6 = -u2;</span>
<span class="line">        t_sum = t2 + t6;</span>
<span class="line">        if (t_sum &gt; ts)</span>
<span class="line">        {</span>
<span class="line">            k_svpwm = ts / t_sum;</span>
<span class="line">            t2 = k_svpwm * t2;</span>
<span class="line">            t6 = k_svpwm * t6;</span>
<span class="line">        }</span>
<span class="line">        t7 = (ts - t2 - t6) / 2;</span>
<span class="line">        t_a = t6 + t7;</span>
<span class="line">        t_b = t2 + t6 + t7;</span>
<span class="line">        t_c = t7;</span>
<span class="line">        break;</span>
<span class="line">    case 3:</span>
<span class="line">        t2 = u1;</span>
<span class="line">        t3 = u2;</span>
<span class="line">        t_sum = t2 + t3;</span>
<span class="line">        if (t_sum &gt; ts)</span>
<span class="line">        {</span>
<span class="line">            k_svpwm = ts / t_sum;</span>
<span class="line">            t2 = k_svpwm * t2;</span>
<span class="line">            t3 = k_svpwm * t3;</span>
<span class="line">        }</span>
<span class="line">        t7 = (ts - t2 - t3) / 2;</span>
<span class="line">        t_a = t7;</span>
<span class="line">        t_b = t2 + t3 + t7;</span>
<span class="line">        t_c = t3 + t7;</span>
<span class="line">        break;</span>
<span class="line">    case 2:</span>
<span class="line">        t1 = -u1;</span>
<span class="line">        t3 = -u3;</span>
<span class="line">        t_sum = t1 + t3;</span>
<span class="line">        if (t_sum &gt; ts)</span>
<span class="line">        {</span>
<span class="line">            k_svpwm = ts / t_sum;</span>
<span class="line">            t1 = k_svpwm * t1;</span>
<span class="line">            t3 = k_svpwm * t3;</span>
<span class="line">        }</span>
<span class="line">        t7 = (ts - t1 - t3) / 2;</span>
<span class="line">        t_a = t7;</span>
<span class="line">        t_b = t3 + t7;</span>
<span class="line">        t_c = t1 + t3 + t7;</span>
<span class="line">        break;</span>
<span class="line">    case 6:</span>
<span class="line">        t1 = u2;</span>
<span class="line">        t5 = u3;</span>
<span class="line">        t_sum = t1 + t5;</span>
<span class="line">        if (t_sum &gt; ts)</span>
<span class="line">        {</span>
<span class="line">            k_svpwm = ts / t_sum;</span>
<span class="line">            t1 = k_svpwm * t1;</span>
<span class="line">            t5 = k_svpwm * t5;</span>
<span class="line">        }</span>
<span class="line">        t7 = (ts - t1 - t5) / 2;</span>
<span class="line">        t_a = t5 + t7;</span>
<span class="line">        t_b = t7;</span>
<span class="line">        t_c = t1 + t5 + t7;</span>
<span class="line">        break;</span>
<span class="line">    case 4:</span>
<span class="line">        t4 = -u2;</span>
<span class="line">        t5 = -u1;</span>
<span class="line">        t_sum = t4 + t5;</span>
<span class="line">        if (t_sum &gt; ts)</span>
<span class="line">        {</span>
<span class="line">            k_svpwm = ts / t_sum;</span>
<span class="line">            t4 = k_svpwm * t4;</span>
<span class="line">            t5 = k_svpwm * t5;</span>
<span class="line">        }</span>
<span class="line">        t7 = (ts - t4 - t5) / 2;</span>
<span class="line">        t_a = t4 + t5 + t7;</span>
<span class="line">        t_b = t7;</span>
<span class="line">        t_c = t5 + t7;</span>
<span class="line">        break;</span>
<span class="line">    default:</span>
<span class="line">        1;</span>
<span class="line">        break;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">pwm_output foc_kun::turn_to(float angle_temp)</span>
<span class="line">{</span>
<span class="line">    u_d = 0.5;</span>
<span class="line">    u_q = 0;</span>
<span class="line">    theta = angle_temp;</span>
<span class="line">    pwm_output result;</span>
<span class="line">    svpwm();</span>
<span class="line">    park_inverse_transformation();</span>
<span class="line">    result.a = t_a;</span>
<span class="line">    result.b = t_b;</span>
<span class="line">    result.c = t_c;</span>
<span class="line">    return result;</span>
<span class="line">}</span>
<span class="line">void foc_kun::test(float angle_temp)</span>
<span class="line">{</span>
<span class="line">    u_a = cos(angle_temp);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),t=[r];function m(u,b){return d(),c("div",null,t)}const h=e(v,[["render",m],["__file","Brushless motor drive circuit and FOC control algorithm design.html.vue"]]),g=JSON.parse('{"path":"/my-projects/Brushless%20motor%20drive%20circuit%20and%20FOC%20control%20algorithm%20design.html","title":"Brushless Motor Drive Circuit and FOC Control Algorithm Design","lang":"en-US","frontmatter":{"title":"Brushless Motor Drive Circuit and FOC Control Algorithm Design"},"headers":[{"level":2,"title":"Hardware Design","slug":"hardware-design","link":"#hardware-design","children":[{"level":3,"title":"Six-Channel","slug":"six-channel","link":"#six-channel","children":[]},{"level":3,"title":"Three-Channel","slug":"three-channel","link":"#three-channel","children":[]}]},{"level":2,"title":"Software Design","slug":"software-design","link":"#software-design","children":[]}],"git":{"updatedTime":1721633641000,"contributors":[{"name":"uint16kun","email":"uint16kun","commits":2},{"name":"no","email":"no@no.com","commits":1}]},"filePathRelative":"my-projects/Brushless motor drive circuit and FOC control algorithm design.md","excerpt":"<h2><strong>Hardware Design</strong></h2>\\n<h3><strong>Six-Channel</strong></h3>\\n<img src=\\"/zh/无刷电机/图1.png\\" align=\\"middle\\">\\n<img src=\\"/zh/无刷电机/图2.png\\" align=\\"middle\\">\\n<h3><strong>Three-Channel</strong></h3>\\n<img src=\\"/zh/无刷电机/图3.png\\" align=\\"middle\\">\\n<img src=\\"/zh/无刷电机/图4.png\\" align=\\"middle\\">\\n<img src=\\"/zh/无刷电机/图5.png\\" align=\\"middle\\">"}');export{h as comp,g as data};
