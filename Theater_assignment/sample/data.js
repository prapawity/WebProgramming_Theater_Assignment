// var seat = [{
//         id: "C1",
//         status: false
//     },
//     {
//         id: "C2",
//         status: false
//     },
//     {
//         id: "C3",
//         status: false
//     },
//     {
//         id: "C4",
//         status: false
//     },
//     {
//         id: "C5",
//         status: false
//     },
//     {
//         id: "C6",
//         status: false
//     },
//     {
//         id: "C7",
//         status: false
//     },
//     {
//         id: "C8",
//         status: false
//     },
//     {
//         id: "C9",
//         status: false
//     },
//     {
//         id: "C10",
//         status: false
//     },
//     {
//         id: "C11",
//         status: false
//     },
//     {
//         id: "C12",
//         status: false
//     },
//     {
//         id: "B1",
//         status: false
//     },
//     {
//         id: "B2",
//         status: false
//     },
//     {
//         id: "B3",
//         status: false
//     },
//     {
//         id: "B4",
//         status: false
//     },
//     {
//         id: "B5",
//         status: false
//     },
//     {
//         id: "B6",
//         status: false
//     },
//     {
//         id: "B7",
//         status: false
//     },
//     {
//         id: "B8",
//         status: false
//     },
//     {
//         id: "B9",
//         status: false
//     },
//     {
//         id: "B10",
//         status: false
//     },
//     {
//         id: "B11",
//         status: false
//     },
//     {
//         id: "B12",
//         status: false
//     },
//     {
//         id: "A1",
//         status: false
//     },
//     {
//         id: "A2",
//         status: false
//     },
//     {
//         id: "A3",
//         status: false
//     },
//     {
//         id: "A4",
//         status: false
//     },
//     {
//         id: "A5",
//         status: false
//     },
//     {
//         id: "A6",
//         status: false
//     },
//     {
//         id: "A7",
//         status: false
//     },
//     {
//         id: "A8",
//         status: false
//     },
//     {
//         id: "A9",
//         status: false
//     },
//     {
//         id: "A10",
//         status: false
//     },
//     {
//         id: "A11",
//         status: false
//     },
//     {
//         id: "A12",
//         status: false
//     },

// ]

// var user = ['admin']
// var pass = ['admin']
// var authen_state = false;
// localStorage.setItem('user', JSON.stringify(user));
// localStorage.setItem('pass', JSON.stringify(pass));
// localStorage.setItem("authen_state", JSON.stringify(authen_state));
// localStorage.setItem('seat', JSON.stringify(seat));


function signup() {
    var userName = document.getElementById('username').value;
    var passWord = document.getElementById('password').value;

    user = JSON.parse(localStorage.getItem('user'))
    pass = JSON.parse(localStorage.getItem('pass'))
    user.push(userName)
    pass.push(passWord)
    username = document.getElementById('username').value = "";
    password = document.getElementById('password').value = "";
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('pass', JSON.stringify(pass));

    alert('Register successful.');
}

function login() {
    var storedName = JSON.parse(localStorage.getItem('user'));
    var storedPass = JSON.parse(localStorage.getItem('pass'));
    var authen = false

    var username = document.getElementById('username');
    var password = document.getElementById('password');

    for (let index = 0; index < storedName.length; index++) {

        if (username.value == storedName[index] || password.value == storedPass[index]) {
            username = document.getElementById('username').value = "";
            password = document.getElementById('password').value = "";

            $('#popUpWindow').modal('hide')
            // document.getElementById("popUpWindow").className = "modal fade";
            $('.modal-backdrop').remove();
            authen = true;
            alert('Log in successful.');
            break;

        }
    }

    if (authen == false) {
        alert('ERROR');
    }
}
var vm = new Vue({
    el: "#app1",
    data: {
        infor_show: "",
        pay_by: "",
        man_seat: 0,
        baby_seat: 0,
        authen_state: JSON.parse(localStorage.getItem("authen_state")),
        seat_data: JSON.parse(localStorage.getItem('seat')),
        money: 0,
        time: "00:00",
        showstate: false,
        numberofseat: 0,
        theaters: [{
            id_city: 'Bangkok',
            theater: [{
                    theater_name: 'SF CINEMA',
                    time: [
                        '10:30', '11:20', "11:50", '13:20', '14:00'
                    ],
                },
                {
                    theater_name: 'SF CINEMA',
                    time: [
                        '10:30', '11:20', "11:50", '14:00'
                    ],
                },
                {
                    theater_name: 'SF CINEMA',
                    time: [
                        '10:30', '11:20', "11:50", '13:20',
                    ],
                },

            ],
        }, {
            id_city: 'Chiangmai',
            theater: [{
                    theater_name: 'SF CINEMA',
                    time: [
                        '10:30', '11:20', "11:50", '13:20', '14:00'
                    ],
                },
                {
                    theater_name: 'SF CINEMA',
                    time: [
                        '10:30', '11:20', "11:50", '13:20',
                    ],
                },
                {
                    theater_name: 'SF CINEMA',
                    time: [
                        '10:30', '11:20', "11:50", '14:00'
                    ],
                },

            ],
        }, {
            id_city: 'Chonburi',
            theater: [{
                    theater_name: 'SF CINEMA',
                    time: [
                        '10:30', '11:20', "11:50", '13:20', '14:00'
                    ],
                },
                {
                    theater_name: 'SF CINEMA',
                    time: [
                        '10:30', '11:20', "11:50", '13:20',
                    ],
                },
                {
                    theater_name: 'SF CINEMA',
                    time: [
                        '10:30', '11:20', "11:50", '13:20', '14:00'
                    ],
                },

            ],
        }, {
            id_city: 'Phuket',
            theater: [{
                    theater_name: 'SF CINEMA',
                    time: [
                        '10:30', '11:20', "11:50", '13:20', '14:00'
                    ],
                },
                {
                    theater_name: 'SF CINEMA',
                    time: [
                        "11:50", '13:20', '14:00'
                    ],
                },
                {
                    theater_name: 'SF CINEMA',
                    time: [
                        '14:00'
                    ],
                },

            ],
        }, ],
        theater_show: "",
        date: [{
                id: 'date-1',
                text: "26 กุมภาพันธ์ 2562"
            },
            {
                id: 'date-2',
                text: "27 กุมภาพันธ์ 2562"
            },
            {
                id: 'date-3',
                text: "28 กุมภาพันธ์ 2562"
            },
            {
                id: 'date-4',
                text: "29 กุมภาพันธ์ 2562"
            },
        ],
        city: [{
                name: 'Bangkok',
            },
            {
                name: 'Chiangmai',
            },
            {
                name: 'Chonburi',
            },
            {
                name: 'Phuket',
            },
        ],
        posterlist: [
            // {
            //     src: 'https://wallpapercave.com/wp/wp2505826.jpg',
            //     id: 0,
            //     class: 'active'
            // },
            {
                src: 'https://images5.alphacoders.com/936/936030.jpg',
                id: 1,
                class: ''
            },
            {
                src: 'http://hdqwalls.com/wallpapers/ant-man-and-the-wasp-movie-4k-c3.jpg',
                id: 2,
                class: ''
            },
            {
                src: 'https://pixelz.cc/wp-content/uploads/2017/11/interstellar-uhd-4k-wallpaper.jpg',
                id: 3,
                class: ''
            },
            {
                src: 'https://hdqwalls.com/download/dunkirk-2017-movie-4k-3840x2160.jpg',
                id: 4,
                class: ''
            },
            {
                src: 'https://wallpaperaccess.com/full/37959.jpg',
                id: 5,
                class: ''
            },
            {
                src: 'http://www.hdwallpapers.in/walls/doctor_strange_2016_movie_4k_5k-wide.jpg',
                id: 6,
                class: ''
            }
        ],
        city_id: 0,
        selected: 0,
        categories: [{
                id: 1,
                name: "Action"
            },
            {
                id: 2,
                name: "Adventure"
            },
            {
                id: 3,
                name: "Animation"
            },
            {
                id: 4,
                name: "Biography"
            },
            {
                id: 5,
                name: "Crime"
            },
            {
                id: 6,
                name: "Comedy"
            },
            {
                id: 7,
                name: "Drama"
            },
            {
                id: 8,
                name: "History"
            },
            {
                id: 9,
                name: "Horror"
            },
            {
                id: 10,
                name: "Mystery"
            },
            {
                id: 11,
                name: "Sci-Fi"
            },
            {
                id: 12,
                name: "Romance"
            },
        ],

        // ภาพยนตร์
        movies: [{
                showing: true,
                id: 1,
                name: {
                    en: "Captain Marvel",
                    th: "กัปตันมาร์เวล"
                },
                poster: "http://www.majorcineplex.com/uploads/movie/2465/thumb_2465.jpg",
                director: "แอนนา โบเดน, ไรอัน เฟล็ก",
                actors: "บรี ลาร์สัน, ซามูเอล แอล. แจ็กสัน, ลี เพซ, จู๊ด ลอว์",
                categories: [1, 2, 11],
                synopsis: `<div class="desclistsynopsis"><p></p><p>เรื่องราวของของแครอล แดนเวอร์ส หรือ กัปตัน มาร์เวล ฮีโร่ที่ทรงพลังที่สุดในจักรวาลมาร์เวล กับการปกป้องโลกจากสงครามระดับจักรวาลระหว่างเอเลี่ยน 2 เผ่าพันธุ์ มาร์เวล สตูดิโอส์ จะพาเราไปพบกับการผจญภัยที่คุณไม่เคยเห็นมาก่อนในประวัติศาสตร์ของจักรวาลภาพยนตร์มาร์เวล พบกัน มีนาคม 2562</p><br><p></p></div>`,
                link: 'inCinema.html#vdobg'
            },
            {
                showing: true,
                id: 2,
                name: {
                    en: "Friend Zone",
                    th: "ระวัง..สิ้นสุดทางเพื่อน"
                },
                poster: "https://www.majorcineplex.com/uploads/movie/2628/thumb_2628.jpg",
                director: "ชยนพ บุญประกอบ",
                actors: "นาย ณภัทร เสียงสมบุญ, ใบเฟิร์น พิมพ์ชนก ลือวิเศษไพบูลย์",
                categories: [6, 12],
                synopsis: `<div class="desclistsynopsis"><p></p><p>FRIEND ZONE<br><br>ระวัง..สิ้นสุดทางเพื่อน<br><br>คำเตือน! ที่เพื่อนทุกคนพึงระวัง<br><br>เขตกักกันความสัมพันธ์<br><br>ที่ห้ามรักกันเกินกว่าเพื่อน</p><br><br><p>บนโลกใบนี้ คงมีชายหญิงอีกหลายคู่ที่กำลังไต่อยู่บนตะเข็บชายแดนแห่งความสัมพันธ์ของความเป็น “เพื่อน”&nbsp; กับ “แฟน” ซึ่งพื้นที่เล็กๆริมชายแดนตรงนี้มีชื่อเรียกแบบสากลว่า FRIEND ZONE หรือเขตแดนพิเศษของ คนที่อยู่ในสภาพ...กลับตัวไปเป็นเพื่อนก็ไม่ได้ ให้ไปเป็นแฟนก็ไปไม่ถึง&nbsp;</p><br> <br><p>ปาล์ม (นาย - ณภัทร เสียงสมบุญ) คือ หนึ่งในคนที่ติดอยู่ใน FRIEND ZONE ของ กิ๊ง (ใบเฟิร์น - พิมพ์ชนก ลือวิเศษไพบูลย์) เพื่อนสนิทของเขามานานเป็น 10 ปี ปาล์มเคยพยายามจะออกจากเขตแดนพิเศษนี้ ด้วยการสารภาพรักกับกิ๊งไปตอน ม.ปลาย แต่ถูกกิ๊งปฏิเสธง่ายๆด้วยคำว่า&nbsp;</p><br> <br><p>“เป็นเพื่อนกันก็ดีอยู่แล้ว”</p><br><br><p>... นับจากวันนั้น ปาล์มกับกิ๊งก็เป็นยิ่งกว่าเพื่อนสนิท ทุกครั้งที่ปาล์มเลิกกับแฟนไม่ว่ากี่คนต่อกี่คน กิ๊งก็จะคอยด่าเตือนสติ และถ้ากิ๊งมีปัญหาทะเลาะกับแฟน ไม่ว่ากิ๊งจะอยู่ที่ไหน จะพม่า มาเลย์ หรือฮ่องกง แค่เพียงโทรมา สจ๊วตอย่างปาล์มก็พร้อมจะบินไปหาทันที ก็ไม่รู้ว่าเป็นเพราะความใจดีเหนือขีดจำกัดนี้หรือเปล่า ที่ทำให้เมื่อกิ๊งมีปัญหากับพี่เท็ด (เจสัน ยัง) แฟนคนปัจจุบัน จู่ๆกิ๊งก็ถามปาล์มขึ้นมาว่า</p><br> <br><p>“แกเคยคิดไหม... ถ้าเราสองคนเป็นแฟนกันจะเป็นยังไง”&nbsp;</p><br> <br><p>ทันใดนั้น สัญญาณเตือนภัยในใจปาล์มก็ดังขึ้นถี่ๆ เพราะปาล์มรู้ดีว่านี่คือโอกาสครั้งสำคัญที่เขาจะได้ออกจาก FRIEND ZONE เพียงแต่เขาไม่รู้ว่าการออกไปครั้งนี้ จะทำให้เขาได้เริ่มต้นทางแฟน หรือสิ้นสุดทางเพื่อนกับกิ๊งกันแน่!!!</p><br> <br><p>FRIEND ZONE<br><br>ระวัง..สิ้นสุดทางเพื่อน<br><br>14 กุมภาพันธ์นี้ ในโรงภาพยนตร์&nbsp;</p><br><br><p>#FriendZone<br><br>#ระวังสิ้นสุดทางเพื่อน</p><br><p></p></div>`,
                link: 'inCinema.html#vdobg'
            },
            {
                showing: true,
                id: 3,
                name: {
                    en: "Alita Battle Angel",
                    th: "อลิตา แบทเทิล แองเจิ้ล"
                },
                poster: "https://www.majorcineplex.com/uploads/movie/2194/thumb_2194.jpg",
                director: "โรเบิร์ต รอดริเกซ",
                actors: "โรซา ซาลาซาร์, อีซา กอนซาเลซ, เจนนิเฟอร์ คอนเนลลี",
                categories: [1, 2, 12],
                synopsis: `<div class="desclistsynopsis"><p></p><p>Alita: Battle Angel ภาพยนตร์ดัดแปลงจากการ์ตูนญี่ปุ่นเรื่อง เพชฌฆาตไซบอร์ก หรือในชื่อญี่ปุ่นว่า Gunnm ซึ่งเขียนโดย คิชิโระ ยูกิโตะ และได้รับการดัดแปลงเป็นแอนิเมชั่นจากเนื้อเรื่องในหนังสือเล่มแรกๆในชื่อ Battle Angel เรื่องราวเกิดขึ้นในอนาคตอันไกลโพ้น ซึ่งไซบอร์คและหุ่นยนตร์กลายเป็นเรื่องปกติ เมืองลอยฟ้าทิฟาเรส เก็บงำความลับอันดำมืด มันทิ้งขยะไร้ค่าลงสู่โล่งเบื้องล่าง และที่ลานทิ้งขยะนั้นเอง แพทย์ไซบอร์ค อิโดะ พบเข้ากับชิ้นส่วนหัวและลำตัวของเด็กสาวไซบอร์คที่ยังมีชีวิตอยู่ได้ มีเพียงสมองของเธอเท่านั้นที่เป็นมนุษย์ ส่วนอื่นในร่างกายของเธอล้วนเป็นเครื่องจักร เธอสูญเสียความทรงจำทั้งหมดในอดีต และได้ชื่อใหม่จากอิโดะ "เอลิตา" เขาสร้างเธอขึ้นมาใหม่อีกครั้งและกลายเป็นเสมือนบิดาของเธอในฐานะผู้มอบร่างกายใหม่ให้ อย่างไรก็ตาม ข่าวการฆาตกรรมต่อเนื่องได้เริ่มแพร่กระจายไปในเมือง อลิตาเริ่มสงสัยอิโดะในฐานะผู้ลงมือเพื่อหาชิ้นส่วนร่างกายให้เธอ แต่เมื่อเธอติดตามเขาออกไปในคืนหนึ่ง จึงได้พบว่าที่แท้เขากำลังตามจับตัวฆาตกร ภายใต้ฐานะ "ฮันเตอร์ วอร์ริเออร์" ที่เขาได้รับมอบหมายมา ระหว่างการเข้าปะทะกับฆาตกรตัวจริงนั้น สัญชาติญาณของเด็กสาวก็ทำงาน เธอล้มฆาตกรได้ด้วยศิลปะการต่อสู้โบราณ ผลสุดท้าย เธอจึงตัดสินใจเข้าช่วยเหลืออิโดะในการพิทักษ์ความยุติธรรม และได้กลายมาเป็นฮันเตอร์วอร์ริเออร์เช่นกัน เธอปลดล็อคความสามารถและพลังที่แท้จริงของตนเอง เข้าต่อสู้กับศัตรูที่แสนอันตราย และเพื่อนผู้ยึดมั่นในอุดมการณ์</p><br><p></p></div>`,
                link: 'inCinema.html#vdobg'
            },
            {
                showing: true,
                id: 4,
                name: {
                    en: "Ruk-Mai-Pen-Pasa",
                    th: "รักไม่เป็นภาษา"
                },
                poster: "https://www.majorcineplex.com/uploads/movie/2609/thumb_2609.jpg",
                director: "ทีมไข่กวน",
                actors: "โบว์ - เมลดา สุศรี, ฟรอยด์ - ณัฏฐพงษ์ ชาติพงศ์, เบสท์ - ณัฐสิทธิ์ โกฏิมนัสวนิชย์, ซุง กิดาการ ฉัตรแก้วมณี, แอริน ยุกตะทัต, ปริม - อัจฉรียา โพธิพิพิธธนากร, แอนโทเนีย ทูทิลล์, แม็ค - อชิระ เอทเตอร์, เคลเล็น เจมส์ ",
                categories: [6, 12],
                synopsis: `<div class="desclistsynopsis"><p></p><p>พรอน (โบว์ – เมลดา) สาวสุดเพี้ยนที่เมื่อเจอความกดดันเมื่อไหร่เป็นต้องเผลอพูดเป็นคำผวนทุกที พรอน แอบหลงรัก ป๊อป (ซุง - กิดาการ) รุ่นพี่สุดฮอตในที่ทำงานที่เธอกำลังฝึกงานอยู่ ทุกอย่างเหมือนจะไปได้ดี แต่...พรอนต้องเดินทางไปอังกฤษแบบกะทันกัน เพราะ เพ็ญ (แอริน ยุกตะทัต) พี่สาวสุดที่รักกำลังจะแต่งงานสายฟ้าแลบกับ ไมเคิล (เคลเล็น เจมส์) หนุ่มอังกฤษผู้อ่อนโยนที่คบหากันได้เพียง 7 วัน การเดินทางไกลครั้งแรกของ พรอน จึงได้เริ่มต้นขึ้น...&nbsp;<br><br>ชีวิต พรอน ในลอนดอน มีเรื่องให้ลุ้นระทึกได้ทุกวัน เพ็ญ บังคับให้ พรอน ไปเรียนคอร์สฝึกพูดภาษาอังกฤษ แล้วหลอกเธอว่าอาการเพี้ยน ๆ ของเธอจะหาย ถ้าเธอมีแฟนเป็นฝรั่ง ยิ่งเมื่อเธอได้เจอแก๊งเพื่อนใหม่สุดป่วนอย่าง โบ้, จู๊ด และอองตวน&nbsp; ในโรงเรียนสอนภาษาอังกฤษ จนกลายเป็นยัยเพี้ยนพรอนแอนด์เดอะแก๊ง</p><br><br><p>โบ้ (ฟรอยด์ - ณัฏฐพงษ์ ชาติพงศ์) ช่างซ่อมรถ ที่คิดถึงแฟนสาวจนทนไม่ไหว เลยลงทุนประกาศขายบ้านเก่าเพื่อหาเงินทุนเดินทางไปเฝ้าคนรักที่ต่างประเทศทั้ง ๆ ที่พูดภาษาอังกฤษได้แค่ Yes No Ok<br><br>&nbsp;จู๊ด (เบสท์ - ณัฐสิทธิ์ โกฏิมนัสวนิชย์) เด็กหนุ่มทะเล้นมาดกวน ที่พูดได้เฉพาะภาษาอังกฤษในเมนูอาหาร ตั้งเป้าภารกิจแอ้มสาวลอนดอนให้ได้เพราะถูกเพื่อนท้า แต่ไป ๆ มา ๆ กลับไม่ง่ายอย่างที่คิด เพราะดันไปตกหลุมรักกับ เคธี่ (แอนโทเนีย ทูทิลล์) เพื่อนร่วมงานสาวชาวอังกฤษ แต่เธอกลับไม่พูดกับจู๊ดซักคำ ความสัมพันธ์ที่ไม่เคยแม้จะเอ่ยปากคุยกันของพวกเขาจึงเกิดขึ้น...<br><br>อองตวน (แม็ค - อชิระ เอทเตอร์) หนุ่มจอมตื้อลูกครึ่งยุโรปเอเซีย ที่มีกิจการ Food truck แต่พูดภาษาอังกฤษไม่ได้ เกรดภาษาอังกฤษติดลบพอกัน กลับตกหลุม พรอน ตั้งแต่แรก พรอนยังถูกอองตวนตามจีบด้วยภาษาไทยลามกที่จู๊ดเป็นคนสอน<br><br>ต่างคนต่างที่มา แม้แต่วุ้นแปลภาษา หรือ Google Translate ก็คงเอาไม่อยู่ สุดท้ายเสียงเมโลดี้ของหัวใจจะปรับจูนให้ตรงกันได้หรือไม่ ติดตามได้ในโรงภาพยนตร์&nbsp;</p><br><p></p></div>`,
                link: 'inCinema.html#vdobg'
            },
            {
                showing: true,
                id: 5,
                name: {
                    en: "How to Train 3",
                    th: "อภินิหารไวกิ้งพิชิตมังกร 3"
                },
                poster: "https://www.majorcineplex.com/uploads/movie/2414/thumb_2414.jpg",
                director: "ดีน เดอบลัวส์",
                actors: "เคต แบลนเชตต์, ที.เจ. มิลเลอร์, เจอราร์ด บัตเลอร์",
                categories: [3],
                synopsis: `<div class="desclistsynopsis"><p></p><p>จุดเริ่มต้นจากมิตรภาพเหลือเชื่อระหว่างไวกิ้งหนุ่มกับมังกรไนท์ ฟิวรี ที่น่าสะพรึงกลัว ได้กลายเป็นไตรภาคอีพิคที่บอกเล่าเรื่องราวชีวิตของพวกเขา ในตำนานบทใหม่นี้ ในที่สุด ฮิคคัพและทูธเลสก็จะได้ค้นพบโชคชะตาที่แท้จริงของพวกเขาเสียที นั่นคือการเป็นหัวหน้าหมู่บ้านในฐานะผู้นำของเหล่าเบิร์ค เคียงข้างแอสทริด และการเป็นมังกรผู้นำฝูง ในขณะที่ทั้งคู่กำลังจะขึ้นครองอำนาจ ภัยคุกคามที่ร้ายกาจที่สุดเท่าที่พวกเขาเคยเผชิญ รวมถึงการปรากฏตัวของไนท์ ฟิวรีเพศเมีย จะทดสอบสายสัมพันธ์มิตรภาพระหว่างพวกเขาอย่างที่ไม่เคยปรากฏมาก่อน</p><br><p></p></div>`,
                link: 'inCinema.html#vdobg'
            },
            {
                showing: true,
                id: 6,
                name: {
                    en: "Escape Room",
                    th: "กักห้อง เกมโหด"
                },
                poster: "http://www.majorcineplex.com/uploads/movie/2404/thumb_2404.jpg",
                director: "อดัม โรบิเทล",
                actors: "เทย์เลอร์ รัสเซลล์, เดบาร่าห์ แอน โวลล์, โลแกน มิลเลอร์",
                categories: [9, 10],
                synopsis: `<div class="desclistsynopsis"><p></p><p>&nbsp;Escape Room เกิดขึ้นเมื่อกลุ่มคนแปลกหน้าต้องมารวมกันในห้องปริศนาที่ไร้ทางออก โดยมีกล้องวงจรปิดเฝ้าดูพวกเขาจากภายนอก วิธีเดียวที่จะออกจากห้องนี้ได้ จะต้องไขรหัสลับของห้องให้ได้ ถ้าแก้ไขรหัสไม่สำเร็จจะต้องตาย แต่หากใครเป็นผู้ชนะของเกมส์นี้จะได้รับรางวัลเป็นเงินหมื่นดอลล่าร์!! แต่เรื่องราวไม่ง่ายขนาดนั้นเพราะคนที่บงการอยู่เบื้องหลังเกมส์นี้มีวัตถุประสงค์บางอย่าง?&nbsp;</p><br><p></p></div>`,
                link: 'inCinema.html#vdobg'
            }
        ]
    },
    methods: {
        search: function () {
            var text = this.selected;
            if (text == 0) {
                for (var index = 0; index < this.movies.length; index++) {
                    this.movies[index].showing = true
                }
            } else {
                for (var index = 0; index < this.movies.length; index++) {
                    if (this.movies[index].categories.includes(text)) {
                        this.movies[index].showing = true
                    } else {
                        this.movies[index].showing = false
                    }
                }
            }
            document.querySelector("#search").value = ""
        },
        search2: function () {
            var text = document.querySelector("#search").value
            if (text == "") {
                for (var index = 0; index < this.movies.length; index++) {
                    this.movies[index].showing = true
                }
            } else {
                for (var index = 0; index < this.movies.length; index++) {
                    if (this.movies[index].name.th.indexOf(text) > -1 || this.movies[index].name.en
                        .toUpperCase().indexOf(text.toUpperCase()) > -1) {
                        this.movies[index].showing = true
                    } else {
                        this.movies[index].showing = false
                    }
                }
            }
            this.selected = 0

        },
        seleccity: function () {
            for (let index = 0; index < this.theaters.length; index++) {
                if (this.theaters[index].id_city.localeCompare(this.city_id) == 0) {
                    this.theater_show = this.theaters[index];
                }
            }
            authen_state = JSON.parse(localStorage.getItem("authen_state"));
        },
        loopcreate: function () {
            var lis = [];
            for (let index = 0; index < this.theaters.length; index++) {
                lis.push(this.theaters[index].theater);
            }
            console.log(lis)
            return lis;
        },
        seat(index) {
            this.seat_data = JSON.parse(localStorage.getItem('seat'));
            if (document.getElementById(index).src.includes("poster/seat.png")) {
                document.getElementById(index).src = "poster/ticket.png";
                if (this.numberofseat < 40) {
                    this.numberofseat += 1;
                    this.money += 200;
                }
            } else {
                document.getElementById(index).src = "poster/seat.png";
                if (this.numberofseat > 0) {
                    this.numberofseat -= 1;
                    this.money -= 200
                }
            }
            for (let indexs = 0; indexs < this.seat_data.length; indexs++) {
                if (this.seat_data[indexs].id == index) {
                    this.seat_data[indexs].status = !this.seat_data[indexs].status
                }

            }
            localStorage.setItem('seat', JSON.stringify(this.seat_data));
            this.man_seat = this.numberofseat

        },
        selecwatchtime(text) {
            this.time = text;
        },
        seatcount() {

        },
        showdate() {
            var date_id = document.getElementsByClassName("carousel-item active")[0].id
            if (date_id == "date-0") {
                return "25 กุมภาพันธ์ 2562"
            } else if (date_id == "date-1") {
                return "26 กุมภาพันธ์ 2562"
            } else if (date_id == "date-2") {
                return "27 กุมภาพันธ์ 2562"
            } else if (date_id == "date-3") {
                return "28 กุมภาพันธ์ 2562"
            } else if (date_id == "date-4") {
                return "29 กุมภาพันธ์ 2562"
            }
        },
        edit_Seat_plus_man(seat_edit) {
            if (seat_edit < 0 && this.baby_seat - this.man_seat >= 0) {
                this.baby_seat += 1;
                this.man_seat -= 1;
            } else {
                if (this.baby_seat >= 1) {
                    this.baby_seat -= 1;
                    this.man_seat += 1;
                }
            }
        },
        edit_Seat_plus_kids(seat_edit) {
            if (seat_edit < 0 && this.man_seat - this.baby_seat >= 0) {
                this.baby_seat -= 1;
                this.man_seat += 1;
            } else {
                if (this.man_seat >= 1) {
                    this.baby_seat += 1;
                    this.man_seat -= 1;
                }
            }
        },
        print_recip1(chk) {
            if (chk == 1) this.pay_by = "Counter Theater"
            else if (chk == 2) this.pay_by = "CreditCard"
            else if (chk == 3) this.pay_by = "PromptPay"
            var r = confirm("Confirm to finish");
            if (r == true) {
                this.save_data_recip();
                alert("Progess is done!")
            }
        },
        save_data_recip() {
            var ans = ["Captain Marvel"];
            var txt = ""
            this.seat_data = JSON.parse(localStorage.getItem('seat'));
            for (let index = 0; index < this.seat_data.length; index++) {
                if (this.seat_data[index].status == true) {
                    txt += this.seat_data[index].id + ", "
                }
            }
            ans[1] = txt;
            ans[2] = this.pay_by;
            if (this.pay_by == "Counter Theater") ans[3] = "Inprogess"
            else ans[3] = "Complete"
            ans[4] = "SF CINEMA"
            ans[5] = this.time
            ans[6] = this.city_id
            var daily = this.showdate();
            ans[7] = daily;
            localStorage.setItem('history_recipt', JSON.stringify(ans))
            this.set_table()

        },
        refund() {
            localStorage.removeItem('history_recipt')
            var seat = [{
                    id: "C1",
                    status: false
                },
                {
                    id: "C2",
                    status: false
                },
                {
                    id: "C3",
                    status: false
                },
                {
                    id: "C4",
                    status: false
                },
                {
                    id: "C5",
                    status: false
                },
                {
                    id: "C6",
                    status: false
                },
                {
                    id: "C7",
                    status: false
                },
                {
                    id: "C8",
                    status: false
                },
                {
                    id: "C9",
                    status: false
                },
                {
                    id: "C10",
                    status: false
                },
                {
                    id: "C11",
                    status: false
                },
                {
                    id: "C12",
                    status: false
                },
                {
                    id: "B1",
                    status: false
                },
                {
                    id: "B2",
                    status: false
                },
                {
                    id: "B3",
                    status: false
                },
                {
                    id: "B4",
                    status: false
                },
                {
                    id: "B5",
                    status: false
                },
                {
                    id: "B6",
                    status: false
                },
                {
                    id: "B7",
                    status: false
                },
                {
                    id: "B8",
                    status: false
                },
                {
                    id: "B9",
                    status: false
                },
                {
                    id: "B10",
                    status: false
                },
                {
                    id: "B11",
                    status: false
                },
                {
                    id: "B12",
                    status: false
                },
                {
                    id: "A1",
                    status: false
                },
                {
                    id: "A2",
                    status: false
                },
                {
                    id: "A3",
                    status: false
                },
                {
                    id: "A4",
                    status: false
                },
                {
                    id: "A5",
                    status: false
                },
                {
                    id: "A6",
                    status: false
                },
                {
                    id: "A7",
                    status: false
                },
                {
                    id: "A8",
                    status: false
                },
                {
                    id: "A9",
                    status: false
                },
                {
                    id: "A10",
                    status: false
                },
                {
                    id: "A11",
                    status: false
                },
                {
                    id: "A12",
                    status: false
                },

            ]
            localStorage.setItem('seat', JSON.stringify(seat));
            this.set_table();
            alert("Refund Seccess")

        },
        set_table() {
            if (document.getElementById("show_his").innerHTML == "Show History") {
                document.getElementById("show_his").innerHTML = "Hide History"
                var text = JSON.parse(localStorage.getItem('history_recipt'))
                this.infor_show = text;
            } else if (document.getElementById("show_his").innerHTML == "Hide History") {
                document.getElementById("show_his").innerHTML = "Show History"
                infor_show = [];
            }

        },
        chk_recip() {
            if (localStorage.getItem('history_recipt') == null) return false
            else return true
        },
        show_history() {
            if (this.infor_show.length != 0 && document.getElementById("show_his").innerHTML == "Hide History") {
                if (document.getElementById("show_his").innerHTML == "Show History") {
                    return false
                }
                return true
            }
            else{
                return false
            }
        },
        print_recip() {
            window.print()
        }


    },
    computed: {

    },
    watch: {
        selected: function (val) {
            if (val) {
                this.search();
            }
        },
        city_id: function (val) {
            if (val) {
                this.seleccity();
            }
            this.showstate = true;
        },

    }

});