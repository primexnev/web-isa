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
// BÖLÜM B: Kendini yazan yazı ("I build ...")
// =====================================================

// B1) Sırayla yazılacak kelimeler
const words = ["games", "XR experiences", "3D worlds"];

// B2) Yazının gideceği yer (HTML'deki #typed)
const typed = document.getElementById("typed");

// B3) Hangi kelimedeyiz, kaçıncı harfteyiz
let wordIndex = 0;
let letterIndex = 0;

// B4) Her çağrıda bir harf daha yaz
function typeLetter() {
  const word = words[wordIndex];
  letterIndex = letterIndex + 1;
  typed.textContent = word.slice(0, letterIndex);   // kelimenin ilk X harfi

  if (letterIndex < word.length) {
    setTimeout(typeLetter, 100);       // sonraki harf: 0.1 saniye sonra
  } else {
    // B5) Kelime bitti: sonraki kelimeye geç, baştan başla
    wordIndex = (wordIndex + 1) % words.length;     // sona gelince başa dön
    letterIndex = 0;
    setTimeout(typeLetter, 1500);      // 1.5 saniye bekle
  }
}

// B6) Sayfa açılınca yazmaya başla
typeLetter();
