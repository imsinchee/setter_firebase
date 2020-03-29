var firebaseConfig = {
  apiKey: "AIzaSyBb-hbOWhzM3srzdnjhL4bONWd9mthcy98",
  authDomain: "idp-bf0cb.firebaseapp.com",
  databaseURL: "https://idp-bf0cb.firebaseio.com",
  projectId: "idp-bf0cb",
  storageBucket: "idp-bf0cb.appspot.com",
  messagingSenderId: "561595991088",
  appId: "1:561595991088:web:3642893ccc67f2ae1159f5",
  measurementId: "G-M75QFKPF7G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.database();
console.log("Ready");

var metal = 0,
  paper = 0,
  plastic = 0,
  glass = 0,
  type = "null";

var get_type = db.ref("IDP/state");
get_type.on("value", function(snapshot) {
  type = snapshot.val();
});

var get_metal = db.ref("IDP/metal");
get_metal.on("value", function(snapshot) {
  metal = snapshot.val();
  document.getElementById("metal_count").innerHTML = metal;
});

var get_paper = db.ref("IDP/paper");
get_paper.on("value", function(snapshot) {
  paper = snapshot.val();
  document.getElementById("paper_count").innerHTML = paper;
});

var get_plastic = db.ref("IDP/plastic");
get_plastic.on("value", function(snapshot) {
  plastic = snapshot.val();
  document.getElementById("plastic_count").innerHTML = plastic;
});

var get_glass = db.ref("IDP/glass");
get_glass.on("value", function(snapshot) {
  glass = snapshot.val();
  document.getElementById("glass_count").innerHTML = glass;
});

window.onload = function() {
  document.getElementById("metal_minus").onclick = function() {
    metal = metal - 1;
    if (metal < 0) {
      metal = 0;
    }
    setAll();
  };

  document.getElementById("paper_minus").onclick = function() {
    paper = paper - 1;
    if (paper < 0) {
      paper = 0;
    }
    setAll();
  };

  document.getElementById("plastic_minus").onclick = function() {
    plastic = plastic - 1;
    if (plastic < 0) {
      plastic = 0;
    }
    setAll();
  };

  document.getElementById("glass_minus").onclick = function() {
    glass = glass - 1;
    if (glass < 0) {
      glass = 0;
    }
    setAll();
  };

  document.getElementById("metal_plus").onclick = function() {
    metal = metal + 1;
    if (metal > 5) {
      metal = 5;
    }
    setAll();
  };

  document.getElementById("paper_plus").onclick = function() {
    paper = paper + 1;
    if (paper > 5) {
      paper = 5;
    }
    setAll();
  };

  document.getElementById("plastic_plus").onclick = function() {
    plastic = plastic + 1;
    if (plastic > 5) {
      plastic = 5;
    }
    setAll();
  };

  document.getElementById("glass_plus").onclick = function() {
    glass = glass + 1;
    if (glass > 5) {
      glass = 5;
    }
    setAll();
  };
};

function update() {
  type = document.getElementById("getInput").value;
  setAll();
  document.getElementById("getInput").value = "";
}

function setAll() {
  db.ref("IDP").set({
    state: type,
    metal: metal,
    paper: paper,
    plastic: plastic,
    glass: glass
  });
}
