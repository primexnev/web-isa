// =====================================================
// BÖLÜM A: Aşağı kaydırınca bölümleri göster
// =====================================================

// A1) Bir bölüm ekrana girince ona "show" sınıfını ekle
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

// A2) "reveal" sınıfı olan her bölümü izle
document.querySelectorAll(".reveal").forEach(function (section) {
  observer.observe(section);
});


// =====================================================
// BÖLÜM B: Mini oyun – Yıldızı 3 kez yakala
// =====================================================

// B1) HTML'deki parçaları bul
const arena = document.getElementById("arena");
const star = document.getElementById("star");
const scoreText = document.getElementById("score");

// B2) Başlangıç puanı ve hedef
let score = 0;
const goal = 3;

// B3) Yıldızı oyun alanında rastgele bir yere taşı
function moveStar() {
  const x = Math.random() * (arena.clientWidth - 40);   // 40 = yıldızın genişliği
  const y = Math.random() * (arena.clientHeight - 40);  // 40 = yıldızın yüksekliği
  star.style.left = x + "px";
  star.style.top = y + "px";
}

// B4) Yıldıza tıklanınca puanı artır
star.addEventListener("click", function () {
  score = score + 1;
  scoreText.textContent = score + " / " + goal;

  if (score < goal) {
    moveStar();                        // daha bitmedi: yıldız kaçsın
  } else {
    // B5) Kazandın: yıldızı gizle, mesaj göster, projelere kaydır
    star.hidden = true;
    scoreText.textContent = "Level complete!";
    setTimeout(function () {
      document.getElementById("projects").scrollIntoView();
    }, 800);                           // 0.8 saniye bekle
  }
});

// B6) Sayfa açılınca yıldızı ilk yerine koy
moveStar();
