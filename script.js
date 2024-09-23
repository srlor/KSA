// دالة الفلترة حسب المعايير المختارة من البحث
function filterContributions() {
    // جلب القيم المدخلة من حقول البحث
    let searchInput = document.getElementById("searchInput").value.toLowerCase(); // القيمة المدخلة في حقل البحث
    let sectionFilter = document.getElementById("sectionFilter").value; // الفلتر حسب الشعبة
    let gradeFilter = document.getElementById("gradeFilter").value; // الفلتر حسب الصف الدراسي
    let typeFilter = document.getElementById("typeFilter").value; // الفلتر حسب نوع المحتوى (فيديو/صورة)

    // جلب جميع العناصر ذات الصلة بالمشاركات من صفحة HTML
    let contributions = document.querySelectorAll(".contribution");

    // التكرار على كل عنصر من المشاركات للتحقق مما إذا كان يطابق الفلاتر
    contributions.forEach(function(contribution) {
        // جلب القيم المخزنة كبيانات لكل مشاركة
        let name = contribution.getAttribute("data-name").toLowerCase(); // اسم المشارك
        let section = contribution.getAttribute("data-section"); // رقم الشعبة
        let grade = contribution.getAttribute("data-grade"); // الصف الدراسي
        let type = contribution.getAttribute("data-type"); // نوع المحتوى (فيديو أو صورة)

        // التحقق من مطابقة الفلاتر مع القيم المدخلة
        if (
            (name.includes(searchInput) || searchInput === "") && // مطابقة الاسم
            (section === sectionFilter || sectionFilter === "") && // مطابقة الشعبة
            (grade === gradeFilter || gradeFilter === "") && // مطابقة الصف
            (type === typeFilter || typeFilter === "") // مطابقة نوع المحتوى
        ) {
            contribution.style.display = ""; // إظهار العنصر
        } else {
            contribution.style.display = "none"; // إخفاء العنصر
        }
    });
}


// دالة عرض النافذة المنبثقة عند النقر على الأيقونة
function showPopup() {
    // عرض النافذة المنبثقة عن طريق تغيير خاصية العرض إلى "block"
    document.getElementById("popup").style.display = "block";
}

// دالة إخفاء النافذة المنبثقة عند النقر على زر "إغلاق"
function hidePopup() {
    // إخفاء النافذة المنبثقة عن طريق تغيير خاصية العرض إلى "none"
    document.getElementById("popup").style.display = "none";
}
