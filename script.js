const encrypt = document.getElementById("encryptInput");
const decrypt = document.getElementById("decryptInput");
const keys = {
  "PBFNCLATEOIVSDQKMRGHYZUWXJ": "PBFNCLATEOIVSDQKMRGHYZUWXJ",
  "AGPJIVEBXFCMSDLYHQNZKTWOUR": "AGPJIVEBXFCMSDLYHQNZKTWOUR",
  "IVCFWYOPQBKMUZJTXAELDGHRSN": "IVCFWYOPQBKMUZJTXAELDGHRSN",
  "CBNIOLQASWRDYGHUJTMFXVPKZE": "CBNIOLQASWRDYGHUJTMFXVPKZE",
  "QWIMGLBUJRYTPOHXVADNKCSEFZ": "QWIMGLBUJRYTPOHXVADNKCSEFZ",
  "EKBGLMANZTJSUVRIFCWDYOPQXH": "EKBGLMANZTJSUVRIFCWDYOPQXH",
  "XTMSLOGENWDQKAJIBUZRHFVYCP": "XTMSLOGENWDQKAJIBUZRHFVYCP",
  "ZFHSEQGATVMDYUBWPCRLOJNKXI": "ZFHSEQGATVMDYUBWPCRLOJNKXI",
  "GAYLOZBDUXKIRSCPHFVMWQJNET": "GAYLOZBDUXKIRSCPHFVMWQJNET",
  "DSZQEWLAYPXRITJVUGHBNOCFKM": "DSZQEWLAYPXRITJVUGHBNOCFKM",
  "HTOJAVGXRYLKZMSIFWNUEBQPDC": "HTOJAVGXRYLKZMSIFWNUEBQPDC",
  "FXNVMUGPEKBZRCDSWLAJHIYTOQ": "FXNVMUGPEKBZRCDSWLAJHIYTOQ",
  "SPDHEJNROBULYXIZCAWMTQVGKF": "SPDHEJNROBULYXIZCAWMTQVGKF",
  "TKRGADMVHOESZWQCXNILPBYJFU": "TKRGADMVHOESZWQCXNILPBYJFU",
  "KPSDRJEFTCNIVOMWXHULBGQZAY": "KPSDRJEFTCNIVOMWXHULBGQZAY",
  "RHGCDTLQZNJUWBAVKXIFEPMYSO": "RHGCDTLQZNJUWBAVKXIFEPMYSO",
  "MIVUARCHKQGWXZOEBYLSJFNTPD": "MIVUARCHKQGWXZOEBYLSJFNTPD",
  "JHELUDBNKIGOZXCARMYQVSPFTW": "JHELUDBNKIGOZXCARMYQVSPFTW",
  "WREJYVDZCSUIMANKXLTPGQFOHB": "WREJYVDZCSUIMANKXLTPGQFOHB",
  "UPNGHOYTWXBICAMJZSKRFDQLEV": "UPNGHOYTWXBICAMJZSKRFDQLEV",
  "BLHDMFCJYSNWEAVGIUTRZPQOXK": "BLHDMFCJYSNWEAVGIUTRZPQOXK",
  "YFEQCGWNTHLKOPRIDSBAMVJUZX": "YFEQCGWNTHLKOPRIDSBAMVJUZX",
  "VXEMCPWQOGTLZIYKHFNDAUJRBS": "VXEMCPWQOGTLZIYKHFNDAUJRBS",
  "OVKJTGUSRYCIDHNBXFWEQPZMLA": "OVKJTGUSRYCIDHNBXFWEQPZMLA",
  "NQUTMZGYRVPAWFEKOHJSCDXBIL": "NQUTMZGYRVPAWFEKOHJSCDXBIL",
  "LFIZWVCDQOSJBKEHXANRYMTPUG": "LFIZWVCDQOSJBKEHXANRYMTPUG"
};

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const updateDecrypt = _.debounce(() => {
  console.log('decrypt')
  animateDecrypt();
  
  const selectedKey = document.getElementById("keySelect").value;
  const cipherAlphabet = keys[selectedKey];
  const textInput = document.getElementById("encryptInput").value.toUpperCase();
  let resultText = "";

  // For all ciphers
  for (let char of textInput) {
    if (alphabet.includes(char)) {
      const index = alphabet.indexOf(char);
      resultText += cipherAlphabet[index];
    } else {
      resultText += char;
    }
  }

  document.getElementById("decryptInput").value = resultText;
}, 800);

const updateEncrypt = _.debounce(() => {
  animateEncrypt();
  console.log('encrypt')
  
  const selectedKey = document.getElementById("keySelect").value;
  const cipherAlphabet = keys[selectedKey];
  const textInput = document.getElementById("decryptInput").value.toUpperCase();
  let resultText = "";

  // For all ciphers
  for (let char of textInput) {
    if (cipherAlphabet.includes(char)) {
      const index = cipherAlphabet.indexOf(char);
      resultText += alphabet[index];
    } else {
      resultText += char;
    }
  }

  document.getElementById("encryptInput").value = resultText;
}, 800);

const updateBoth = () => {
  const selectedKey = document.getElementById("keySelect").value;
  document.getElementById("selectedKey").textContent = selectedKey;

  // Show image for selected key
 // if (selectedKey) {
  //  const selectedIndex = document.getElementById("keySelect").selectedIndex + 1;
 //   document.getElementById("selectedImage").src = `image${selectedIndex}.png`;
 //   document.getElementById("selectedImage").style.display = "block";
//  }

  updateDecrypt();
  updateEncrypt();
}

// Initialize with the first key selected
document.getElementById("selectedKey").textContent = document.getElementById("keySelect").value;

function animateEncrypt() {
  encrypt.classList.add('text-glow');
  encrypt.addEventListener('animationend', animationCleanup);
}

function animateDecrypt() {
  decrypt.classList.add('text-glow');
  decrypt.addEventListener('animationend', animationCleanup);
}

const animationCleanup = () => {
  encrypt.classList.remove('text-glow');
  decrypt.classList.remove('text-glow');
}

encrypt.addEventListener("keydown", updateDecrypt);
decrypt.addEventListener("keydown", updateEncrypt);
document.getElementById("keySelect").addEventListener("change", updateBoth);
