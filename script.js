var swiper = new Swiper(".swiper", {
    spaceBetween: 40,
    loop: true,
    speed: 3000,
    slidesPerView: "auto",
    freeMode: true,
    autoplay: {
      delay: 0,
    },
  });

  
  $(document).ready(function () {
    var counter = 0;
    var c = 0;
    var i = setInterval(function () {
      // تحديث النص الخاص بالنسبة المئوية
      $(".loading-page .counter h1").html(c + "%");
  
      // تحديث عرض شريط التحميل
      $(".loading-page .counter hr").css("width", c + "%");
  
      // زيادة القيمة
      counter++;
      c++;
  
      // عندما تصل النسبة إلى 100%
      if (counter === 101) {
        clearInterval(i); // إيقاف المؤقت
        setTimeout(function () {
          // إخفاء صفحة التحميل مع تأثير اختفاء
          $(".loading-page").css("opacity", "0");
          setTimeout(function () {
            // إزالة صفحة التحميل تمامًا وإظهار المحتوى
            $(".loading-page").remove();
            $(".content").fadeIn(); // عرض محتويات الصفحة بتأثير ظهور
          }, 500); // الانتظار بعد الاختفاء
        }, 1000); // الانتظار قليلاً بعد اكتمال التحميل
      }
    }, 50);
  });
