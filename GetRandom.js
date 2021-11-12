function GetRandom() {

    setTimeout(() => {  console.log("World!"); 
    const eltsTest = {
        text1: document.getElementById("text1"),
        text2: document.getElementById("text2")
    };
    

    var myarray= new Array(
        "ความท้อแท้และล้มเหลว เป็นสองก้าวที่สำคัญที่สุดในการก้าวไปสู่ความสำเร็จ",
        "เอาจริงนะเว้ย แกแบ่งคนอื่นเก่งบ้างก็ได้ แต่ละคนมีเอกลักษณ์อยู่แล้ว",
        "วันพรุ่งนี้ ทุกอย่างจะดีขึ้นเอง",
        "เข้าใจความรู้สึกของเธอนะ รู้ไว้ว่าเราจะอยู่ข้างเธอเสมอ",
        "ขอให้สนุกกับงานนะคะ",
        "วันนี้อาจจะเหนื่อย และมีเรื่องให้ต้องทุกข์ใจเยอะ ตอนนี้เรามาพักสักหน่อยกันเถอะ",
        "ไม่ต้องดีกว่าใครแค่ทำให้ดีกว่าตัวเองคนเมื่อวานก็พอแล้ว",
        "เมื่อไหร่ที่คุณสามารถปล่อยอดีตให้ผ่านไปได้ สิ่งที่ดียิ่งกว่าจะตามมาแน่นอน",
        "ไม่ต้องเสียใจหรอก เพราะเธอทำดีที่สุดแล้ว",
        "ช่วงเวลาดีๆ จะกลายเป็นความทรงจำที่ดี และช่วงเวลาแย่ๆ จะกลายเป็นบทเรียนที่ดี",
        "เวลาจะเยียวยาทุกอย่าง เธออาจรู้สึกแย่ โคตรจะแย่ แต่เดี๋ยวมันก็จะผ่านไปเป็นแค่อดีต",
        "วันพรุ่งนี้ ทุกอย่างจะต้องดีขึ้นแน่นอน",
        "ฉันมีความสุขที่ได้มองเธอยิ้มและเติบโตจากตรงนี้เสมอ",
        "ท้ออยู่ใช่ไหมถ้าไม่ไหวก็พักบ้างนะ",
        );
    var random = myarray[Math.floor(Math.random() * myarray.length)];

    const texts = [
        [(random)],
    ];
    
    const morphTime = 1;
    const cooldownTime = 0.0;
    
    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    
    eltsTest.text1.textContent = texts[textIndex % texts.length];
    eltsTest.text2.textContent = texts[(textIndex + 1) % texts.length];
    
    function doMorph() {
        morph -= cooldown;
        cooldown = 0;
    
        let fraction = morph / morphTime;
    
        // if (fraction > 1) {
        //     cooldown = cooldownTime;
        //     fraction = 1;
        // }
    
        setMorph(fraction);
    }
    
    function setMorph(fraction) {
        elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        fraction = 1 - fraction;
        elts.text1.style.filter = `blur(${Math.min(8 / fraction + 1, 100)}px)`;
        elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 0}%`;

        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }
    
    function doCooldown() {
        morph = 0;
    
        eltsTest.text2.style.filter = "";
        eltsTest.text2.style.opacity = "0%";
    
        eltsTest.text1.style.filter = "";
        eltsTest.text1.style.opacity = "0%";
    }
    
    function animate() {
        requestAnimationFrame(animate);
    
        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime - time) / 1000;
        time = newTime;
    
        cooldown -= dt;
    
        if (cooldown <= 0) {
            if (shouldIncrementIndex) {
                textIndex++;
            }
    
            doMorph();
        } else {
            doCooldown();
        }
    }
    
    animate();


}, 800);
}
