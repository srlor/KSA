// وظيفة مشاركة الرابط الخاص بمساهمة الفيديو أو الصورة
function shareContribution(button) {
    const contribution = button.parentElement;
    const name = contribution.getAttribute('data-name');
    const type = contribution.getAttribute('data-type');
    const url = window.location.origin + '?name=' + encodeURIComponent(name) + '&type=' + encodeURIComponent(type);
    alert('رابط المشاركة: ' + url);
}

// إظهار النافذة المنبثقة
function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

// إخفاء النافذة المنبثقة
function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

// وظيفة البحث والفلترة
function filterContributions() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const gradeFilter = document.getElementById('gradeFilter').value;
    const sectionFilter = document.getElementById('sectionFilter').value;
    const typeFilter = document.getElementById('typeFilter').value;

    const contributions = document.querySelectorAll('.contribution');
    contributions.forEach(contribution => {
        const name = contribution.getAttribute('data-name').toLowerCase();
        const grade = contribution.getAttribute('data-grade');
        const section = contribution.getAttribute('data-section');
        const type = contribution.getAttribute('data-type');

        let matchesSearch = name.includes(searchInput);
        let matchesGrade = gradeFilter === "" || grade === gradeFilter;
        let matchesSection = sectionFilter === "" || section === sectionFilter;
        let matchesType = typeFilter === "" || type === typeFilter;

        if (matchesSearch && matchesGrade && matchesSection && matchesType) {
            contribution.style.display = 'block';
        } else {
            contribution.style.display = 'none';
        }
    });
}
