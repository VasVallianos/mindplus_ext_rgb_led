\   

enum DIGITAL_PORTS {
    //% block="3"
    3,
    //% block="5"
    5, 
    //% block="6"
    6,
	//% block="9"
    9,
    //% block="10"
    10,
	//% block="11"
    11
}

//% color="#0D3A2A" iconWidth=50 iconHeight=40
namespace rgbStrip {
    
    //% block="Όρισε RGB Strip με [LEDS] led(s) στο pin [PORT]" blockType="command"
    //% LEDS.shadow="range" LEDS.params.min="1" LEDS.params.max="32" LEDS.defl= "1" 
	//% PORT.shadow="dropdown" PORT.options="DIGITAL_PORTS" PORT.defl="DIGITAL_PORTS.3"
    export function setrgbStrip(parameter: any, block: any) {
        let leds = parameter.LEDS.code;
		let port = parameter.PORT.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("Adafruit_Neopixel","#include <Adafruit_NeoPixel.h>");
            Generator.addObject(`Adafruit${port}` ,`Adafruit_NeoPixel`,`RGB_Strip${port}(${leds}, ${port}, NEO_GRB + NEO_KHZ800);`);
            Generator.addSetup(`neopixel_setup${port}`, `RGB_Strip${port}.begin();`);
        }
    }
	
	//% block="Άναψε το [LED] RGB Led στο pin [PORT] με χρώμα R: [R], G: [G], B: [B] και φωτεινότητα [BRIGHTNESS]" blockType="command"
	//% LED.shadow="range" LED.params.min="1" LED.params.max="32" LED.defl= "1"
    //% PORT.shadow="dropdown" PORT.options="DIGITAL_PORTS" PORT.defl="DIGITAL_PORTS.3"
    //% R.shadow="range" R.defl="255" R.params.max="255"
    //% G.shadow="range" G.defl="255" G.params.max="255"
    //% B.shadow="range" B.defl="255" B.params.max="255"
    //% BRIGHTNESS.shadow="range" BRIGHTNESS.defl="128" BRIGHTNESS.params.max="255"
    export function ledOfStrip(parameter: any, block: any) {
		let led = parameter.LED.code - 1;
        let port = parameter.PORT.code;
        let r = parameter.R.code;
        let g = parameter.G.code;
        let b = parameter.B.code;
        let brightness = parameter.BRIGHTNESS.code;
        if(Generator.board === 'arduino'){
            Generator.addCode(`RGB_Strip${port}.setBrightness(${brightness});`);
            Generator.addCode(`RGB_Strip${port}.setPixelColor(${led}, RGB_Strip${port}.Color(${r}, ${g}, ${b}));`);
            Generator.addCode(`RGB_Strip${port}.show();`);
        }
    }
}

