let countBtn = document.getElementById("count-btn");

countBtn.addEventListener("click",function(){
    let skeleton = document.getElementById("skeleton");
    skeleton.setAttribute("class", "hidden");
})

let duaTitle = document.getElementById("dua-title");
let duaText = document.getElementById("dua-text")

let stepOne = document.getElementById("step-one");
let stepTwo = document.getElementById("step-two");
let stepThree = document.getElementById("step-three");

let count = document.getElementById("count");
let countTotal = document.getElementById("count-total");
let countValue = 0;
let countValue2 = 0;
let countValue3 = 0;
let countValue4 = 0;
let countValue5 = 0;
let countValue6 = 0;
let countValue7 = 0;
let countValue8 = 0;
let countValue9 = 0;
let countValue10 = 0;
let countValue11 = 0;
let countValue12 = 0;
let countValue13 = 0;
let countValue14 = 0;
let countValue15 = 0;
let countValue16 = 0;
let countValue17 = 0;
let countValue18 = 0;
let countValue19 = 0;
let countValue20 = 0;
let countValue21 = 0;
let countValue22 = 0;
let countValue23 = 0;
let countValue24 = 0;
let countValue25 = 0;
let countValue26 = 0;

let countTotalValue = 0;

countBtn.addEventListener('click',function(){
    if(countValue < 1){
        countValue += 1;
        count.innerText = countValue;
        duaTitle.innerText = "১  নং জিকির : আয়াতুল কুরসী ( সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;
    }else if(countValue2 < 3){
        countValue2 += 1;
        count.innerText = countValue2;
        duaTitle.innerText = "২ নং  জিকির : সুরাহ ইখলাস ( সকাল সন্ধ্যা ৩ বার )";
        duaText.innerText = `        
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        قُلْ هُوَ ٱللَّهُ أَحَدٌ ١ 
        ٱللَّهُ ٱلصَّمَدُ ٢ 
        لَمْ يَلِدْ وَلَمْ يُولَدْ ٣ 
        وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ ٤       
        `;

    }else if(countValue3 < 3){
        countValue3 += 1;
        count.innerText = countValue3;
        duaTitle.innerText = "৩ নং  জিকির : সুরাহ ফালাক্ব  ( সকাল সন্ধ্যা ৩ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ ١ 
            مِن شَرِّ مَا خَلَقَ ٢ 
            وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ٣ 
            وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلْعُقَدِ ٤ 
            وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ٥
        `;

    }else if(countValue4 < 3){
        countValue4 += 1;
        count.innerText = countValue4;
        duaTitle.innerText = "৪ নং জিকির : সুরাহ নাস ( সকাল সন্ধ্যা ৩ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ ١ 
            مَلِكِ ٱلنَّاسِ ٢ 
            إِلَـٰهِ ٱلنَّاسِ ٣ 
            مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ ٤ 
            ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ ٥ 
            مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ ٦
        `;
    }else if(countValue5 < 7){
        countValue5 += 1;
        count.innerText = countValue5;
        duaTitle.innerText = "5নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue6 < 1){
        countValue6 += 1;
        count.innerText = countValue6;
        duaTitle.innerText = "6নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue7 < 3){
        countValue7 += 1;
        count.innerText = countValue7;
        duaTitle.innerText = "7নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue8 < 10){
        countValue8 += 1;
        count.innerText = countValue8;
        duaTitle.innerText = "8নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue9 < 1){
        countValue9 += 1;
        count.innerText = countValue9;
        duaTitle.innerText = "9নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue10 < 1){
        countValue10 += 1;
        count.innerText = countValue10;
        duaTitle.innerText = "10নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue11 < 1){
        countValue11 += 1;
        count.innerText = countValue11;
        duaTitle.innerText = "11নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue12 < 1){
        countValue12 += 1;
        count.innerText = countValue12;
        duaTitle.innerText = "12নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue13 < 3){
        countValue13 += 1;
        count.innerText = countValue13;
        duaTitle.innerText = "13নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue14 < 1){
        countValue14 += 1;
        count.innerText = countValue14;
        duaTitle.innerText = "14নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue15 < 100){
        countValue15 += 1;
        count.innerText = countValue15;
        duaTitle.innerText = "15নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue16 < 4){
        countValue16 += 1;
        count.innerText = countValue16;
        duaTitle.innerText = "16নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue17 < 1){
        countValue17 += 1;
        count.innerText = countValue17;
        duaTitle.innerText = "17নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue18 < 1){
        countValue18 += 1;
        count.innerText = countValue18;
        duaTitle.innerText = "18নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue19 < 3){
        countValue19 += 1;
        count.innerText = countValue19;
        duaTitle.innerText = "19নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue20 < 1){
        countValue20 += 1;
        count.innerText = countValue20;
        duaTitle.innerText = "12নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue21 < 3){
        countValue21 += 1;
        count.innerText = countValue21;
        duaTitle.innerText = "12নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue22 < 3){
        countValue22 += 1;
        count.innerText = countValue22;
        duaTitle.innerText = "12নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue23 < 7){
        countValue23 += 1;
        count.innerText = countValue23;
        duaTitle.innerText = "13নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue24 < 100){
        countValue24 += 1;
        count.innerText = countValue24;
        duaTitle.innerText = "14নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue25 < 100){
        countValue25 += 1;
        count.innerText = countValue25;
        duaTitle.innerText = "14নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else if(countValue26 < 100){
        countValue26 += 1;
        count.innerText = countValue26;
        duaTitle.innerText = "14নং জিকির : আয়াতুল কুরসী (সকাল - সন্ধ্যা ১ বার )";
        duaText.innerText = `        
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
        `;

    }else{
        countValue3 += 1;
        count.innerText = countValue3;
    }
    countTotalValue += 1;
    countTotal.innerText = countTotalValue;

    // if(countTotalValue >= 33){
    //     stepOne.className = "step step-secondary";
    // }
    // if(countTotalValue >= 66){
    //     stepTwo.className = "step step-secondary";
    // }
    // if(countTotalValue >= 99){
    //     stepThree.className = "step step-secondary";
    // }
    
})

// Progress 

let progress = document.getElementById("progress"); 
let progressText = document.getElementById("progress-text");

let progressValue = 0;
let progressTextValue = 0;

let progressValue2 = 0;
let progressTextValue2 = 0;

let progressValue3 = 0;
let progressTextValue3 = 0;

let progressValue4 = 0;
let progressTextValue4 = 0;

let progressValue5 = 0;
let progressTextValue5 = 0;

let progressValue6 = 0;
let progressTextValue6 = 0;

let progressValue7 = 0;
let progressTextValue7 = 0;

let progressValue8 = 0;
let progressTextValue8 = 0;

let progressValue9 = 0;
let progressTextValue9 = 0;

let progressValue10 = 0;
let progressTextValue10 = 0;

let progressValue11 = 0;
let progressTextValue11 = 0;

let progressValue12 = 0;
let progressTextValue12 = 0;

let progressValue13 = 0;
let progressTextValue13 = 0;

let progressValue14 = 0;
let progressTextValue14 = 0;

let progressValue15 = 0;
let progressTextValue15 = 0;

let progressValue16 = 0;
let progressTextValue16 = 0;

let progressValue17 = 0;
let progressTextValue17 = 0;

let progressValue18 = 0;
let progressTextValue18 = 0;

let progressValue19 = 0;
let progressTextValue19 = 0;

let progressValue20 = 0;
let progressTextValue20 = 0;

let progressValue21 = 0;
let progressTextValue21 = 0;

let progressValue22 = 0;
let progressTextValue22 = 0;

let progressValue23 = 0;
let progressTextValue23 = 0;

let progressValue24 = 0;
let progressTextValue24 = 0;

let progressValue25 = 0;
let progressTextValue25 = 0;

let progressValue26 = 0;
let progressTextValue26 = 0;

countBtn.addEventListener('click',function(){
    if(progressValue < 99){
        progressTextValue += 100;
        progressText.innerText = Math.ceil(progressTextValue);
        progressValue += 100;
        progressValue.innerText = Math.ceil(progressTextValue);
        progress.setAttribute("style",`--value:${progressValue};--size:4rem; --thickness: 6px;`);
        console.log(progress);
    }else if(progressValue2 < 99){
        progressTextValue2 += 33.333;
        progressText.innerText = Math.ceil(progressTextValue2);
        progressValue2 += 33.333;
        progressValue2.innerText = Math.ceil(progressTextValue2);
        progress.setAttribute("style",`--value:${progressValue2};--size:4rem; --thickness: 6px;`);

    }else if(progressValue3 < 99){
        progressTextValue3 += 33.333;
        progressText.innerText = Math.ceil(progressTextValue3);
        progressValue3 += 33.333;
        progressValue3.innerText = Math.ceil(progressTextValue3);
        progress.setAttribute("style",`--value:${progressValue3};--size:4rem; --thickness: 6px;`);

    }else if(progressValue4 < 99){
        progressTextValue4 += 33.333;
        progressText.innerText = Math.ceil(progressTextValue4);
        progressValue4 += 33.333;
        progressValue4.innerText = Math.ceil(progressTextValue4);
        progress.setAttribute("style",`--value:${progressValue4};--size:4rem; --thickness: 6px;`);

    }else if(progressValue5 < 99){
        progressTextValue5 += 14.285;
        progressText.innerText = Math.ceil(progressTextValue5);
        progressValue5 += 14.285;
        progressValue5.innerText = Math.ceil(progressTextValue5);
        progress.setAttribute("style",`--value:${progressValue5};--size:4rem; --thickness: 6px;`);

    }else if(progressValue6 < 99){
        progressTextValue6 += 100;
        progressText.innerText = Math.ceil(progressTextValue6);
        progressValue6 += 100;
        progressValue6.innerText = Math.ceil(progressTextValue6);
        progress.setAttribute("style",`--value:${progressValue6};--size:4rem; --thickness: 6px;`);

    }else if(progressValue7 < 99){
        progressTextValue7 += 33.333;
        progressText.innerText = Math.ceil(progressTextValue7);
        progressValue7 += 33.333;
        progressValue7.innerText = Math.ceil(progressTextValue7);
        progress.setAttribute("style",`--value:${progressValue7};--size:4rem; --thickness: 6px;`);

    }else if(progressValue8 < 99){
        progressTextValue8 += 10;
        progressText.innerText = Math.ceil(progressTextValue8);
        progressValue8 += 10;
        progressValue8.innerText = Math.ceil(progressTextValue8);
        progress.setAttribute("style",`--value:${progressValue8};--size:4rem; --thickness: 6px;`);

    }else if(progressValue9 < 99){
        progressTextValue9 += 100;
        progressText.innerText = Math.ceil(progressTextValue9);
        progressValue9 += 100;
        progressValue9.innerText = Math.ceil(progressTextValue9);
        progress.setAttribute("style",`--value:${progressValue9};--size:4rem; --thickness: 6px;`);

    }else if(progressValue10 < 99){
        progressTextValue10 += 100;
        progressText.innerText = Math.ceil(progressTextValue10);
        progressValue10 += 100;
        progressValue10.innerText = Math.ceil(progressTextValue10);
        progress.setAttribute("style",`--value:${progressValue10};--size:4rem; --thickness: 6px;`);

    }else if(progressValue11 < 99){
        progressTextValue11 += 100;
        progressText.innerText = Math.ceil(progressTextValue11);
        progressValue11 += 100;
        progressValue11.innerText = Math.ceil(progressTextValue11);
        progress.setAttribute("style",`--value:${progressValue11};--size:4rem; --thickness: 6px;`);

    }else if(progressValue12 < 99){
        progressTextValue12 += 100;
        progressText.innerText = Math.ceil(progressTextValue12);
        progressValue12 += 100;
        progressValue12.innerText = Math.ceil(progressTextValue12);
        progress.setAttribute("style",`--value:${progressValue12};--size:4rem; --thickness: 6px;`);

    }else if(progressValue13 < 99){
        progressTextValue13 += 33.333;
        progressText.innerText = Math.ceil(progressTextValue13);
        progressValue13 += 33.333;
        progressValue13.innerText = Math.ceil(progressTextValue13);
        progress.setAttribute("style",`--value:${progressValue13};--size:4rem; --thickness: 6px;`);

    }else if(progressValue14 < 99){
        progressTextValue14 += 100;
        progressText.innerText = Math.ceil(progressTextValue14);
        progressValue14 += 100;
        progressValue14.innerText = Math.ceil(progressTextValue14);
        progress.setAttribute("style",`--value:${progressValue14};--size:4rem; --thickness: 6px;`);

    }else if(progressValue15 < 100){
        progressTextValue15 += 1;
        progressText.innerText = Math.ceil(progressTextValue15);
        progressValue15 += 1;
        progressValue15.innerText = Math.ceil(progressTextValue15);
        progress.setAttribute("style",`--value:${progressValue15};--size:4rem; --thickness: 6px;`);

    }else if(progressValue16 < 100){
        progressTextValue16 += 25;
        progressText.innerText = Math.ceil(progressTextValue16);
        progressValue16 += 25;
        progressValue16.innerText = Math.ceil(progressTextValue16);
        progress.setAttribute("style",`--value:${progressValue16};--size:4rem; --thickness: 6px;`);

    }else if(progressValue17 < 99){
        progressTextValue17 += 100;
        progressText.innerText = Math.ceil(progressTextValue17);
        progressValue17 += 100;
        progressValue17.innerText = Math.ceil(progressTextValue17);
        progress.setAttribute("style",`--value:${progressValue17};--size:4rem; --thickness: 6px;`);

    }else if(progressValue18 < 99){
        progressTextValue18 += 100;
        progressText.innerText = Math.ceil(progressTextValue18);
        progressValue18 += 100;
        progressValue18.innerText = Math.ceil(progressTextValue18);
        progress.setAttribute("style",`--value:${progressValue18};--size:4rem; --thickness: 6px;`);

    }else if(progressValue19 < 99){
        progressTextValue19 += 33.333;
        progressText.innerText = Math.ceil(progressTextValue19);
        progressValue19 += 33.333;
        progressValue19.innerText = Math.ceil(progressTextValue19);
        progress.setAttribute("style",`--value:${progressValue19};--size:4rem; --thickness: 6px;`);

    }else if(progressValue20 < 99){
        progressTextValue20 += 100;
        progressText.innerText = Math.ceil(progressTextValue20);
        progressValue20 += 100;
        progressValue20.innerText = Math.ceil(progressTextValue20);
        progress.setAttribute("style",`--value:${progressValue20};--size:4rem; --thickness: 6px;`);

    }else if(progressValue21 < 99){
        progressTextValue21 += 33.333;
        progressText.innerText = Math.ceil(progressTextValue21);
        progressValue21 += 33.333;
        progressValue21.innerText = Math.ceil(progressTextValue21);
        progress.setAttribute("style",`--value:${progressValue21};--size:4rem; --thickness: 6px;`);

    }else if(progressValue22 < 99){
        progressTextValue22 += 33.333;
        progressText.innerText = Math.ceil(progressTextValue22);
        progressValue22 += 33.333;
        progressValue22.innerText = Math.ceil(progressTextValue22);
        progress.setAttribute("style",`--value:${progressValue22};--size:4rem; --thickness: 6px;`);
    }else if(progressValue23 < 99){
        progressTextValue23 += 14.285;
        progressText.innerText = Math.ceil(progressTextValue23);
        progressValue23 += 14.285;
        progressValue23.innerText = Math.ceil(progressTextValue23);
        progress.setAttribute("style",`--value:${progressValue23};--size:4rem; --thickness: 6px;`);
    }else if(progressValue24 < 100){
        progressTextValue24 += 1;
        progressText.innerText = Math.ceil(progressTextValue24);
        progressValue24 += 1;
        progressValue24.innerText = Math.ceil(progressTextValue24);
        progress.setAttribute("style",`--value:${progressValue24};--size:4rem; --thickness: 6px;`);
    }else if(progressValue25 < 100){
        progressTextValue25 += 1;
        progressText.innerText = Math.ceil(progressTextValue25);
        progressValue25 += 1;
        progressValue25.innerText = Math.ceil(progressTextValue25);
        progress.setAttribute("style",`--value:${progressValue25};--size:4rem; --thickness: 6px;`);
    }else if(progressValue26 < 100){
        progressTextValue26 += 1;
        progressText.innerText = Math.ceil(progressTextValue26);
        progressValue26 += 1;
        progressValue26.innerText = Math.ceil(progressTextValue26);
        progress.setAttribute("style",`--value:${progressValue26};--size:4rem; --thickness: 6px;`);
    }
    
})


// Total Progress

let totalProgress = document.getElementById("total-progress"); 
let totalProgressText = document.getElementById("total-progress-text");
let totalProgressValue = 0;
let totalProgressTextValue = 0;

let totalProgressValue2 = 0;
let totalProgressTextValue2 = 0;

let totalProgressValue3 = 0;
let totalProgressTextValue3 = 0;

countBtn.addEventListener('click',function(){
    if(totalProgressValue < 500){
        totalProgressTextValue += 0.21645021645;
        totalProgressText.innerText = Math.ceil(totalProgressTextValue);
        totalProgressValue += 0.21645021645;
        totalProgressValue.innerText = Math.ceil(totalProgressTextValue);
        totalProgress.setAttribute("style",`--value:${totalProgressValue};--size:4rem; --thickness: 6px;`);
        console.log(progress);
    }  
})


countBtn.addEventListener('click',function(){
    if(countTotalValue >= 462){
        countBtn.setAttribute('disabled', 'disabled');
        let masaallahImg = document.getElementById("masaallah-img");
        masaallahImg.setAttribute("class","w-96 left-0 top-40 rotate-[40deg] absolute -ml-40");
    }
})