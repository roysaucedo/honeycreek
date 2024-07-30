const shopAllBtn = document.getElementById("0")
const collectionBtn1 = document.getElementById("1")
const collectionBtn2 = document.getElementById("2")
const collectionBtn3 = document.getElementById("3")


const collectionContent1 = document.getElementById("1-content")
const collectionContent2 = document.getElementById("2-content")
const collectionContent3 = document.getElementById("3-content")

console.log(collectionContent1)


const characterFeaturedCollection = document.getElementById("character")
const abcFeaturedCollection = document.getElementById("abc")
const handbookFeaturedCollection = document.getElementById("handbook")



function clickShopAllBtn (){
    shopAllBtn.classList.add("collection-header--icon-title-selected");
    collectionBtn1.classList.remove("collection-header--icon-title-selected");
    collectionBtn2.classList.remove("collection-header--icon-title-selected");
    collectionBtn3.classList.remove("collection-header--icon-title-selected");

    collectionContent1.classList.add("hide-div");
    collectionContent2.classList.add("hide-div");
    collectionContent3.classList.add("hide-div");
    

    characterFeaturedCollection.classList.remove("hide-div");
    abcFeaturedCollection.classList.remove("hide-div");
    handbookFeaturedCollection.classList.remove("hide-div");
}

function clickCollectionBtn1 (){
    collectionBtn1.classList.add("collection-header--icon-title-selected");
    collectionBtn2.classList.remove("collection-header--icon-title-selected");
    collectionBtn3.classList.remove("collection-header--icon-title-selected");
    shopAllBtn.classList.remove("collection-header--icon-title-selected");
    shopAllBtn.classList.add("collection-header--icon-title");

    collectionContent1.classList.remove("hide-div");
    collectionContent2.classList.add("hide-div");
    collectionContent3.classList.add("hide-div");

    characterFeaturedCollection.classList.remove("hide-div");
    abcFeaturedCollection.classList.add("hide-div");
    handbookFeaturedCollection.classList.add("hide-div");
}

function clickCollectionBtn2 (){
    collectionBtn2.classList.add("collection-header--icon-title-selected");
    collectionBtn1.classList.remove("collection-header--icon-title-selected");
    collectionBtn3.classList.remove("collection-header--icon-title-selected");
    shopAllBtn.classList.remove("collection-header--icon-title-selected");
    shopAllBtn.classList.add("collection-header--icon-title");

    collectionContent2.classList.remove("hide-div");
    collectionContent1.classList.add("hide-div");
    collectionContent3.classList.add("hide-div");

    characterFeaturedCollection.classList.add("hide-div");
    handbookFeaturedCollection.classList.add("hide-div");
    abcFeaturedCollection.classList.remove("hide-div");
}

function clickCollectionBtn3 (){
    collectionBtn3.classList.add("collection-header--icon-title-selected");
    collectionBtn1.classList.remove("collection-header--icon-title-selected");
    collectionBtn2.classList.remove("collection-header--icon-title-selected");
    shopAllBtn.classList.remove("collection-header--icon-title-selected");
    shopAllBtn.classList.add("collection-header--icon-title");

    collectionContent3.classList.remove("hide-div");
    collectionContent2.classList.add("hide-div");
    collectionContent1.classList.add("hide-div");

    characterFeaturedCollection.classList.add("hide-div");
    abcFeaturedCollection.classList.add("hide-div");
    handbookFeaturedCollection.classList.remove("hide-div");
}




shopAllBtn.addEventListener("click", clickShopAllBtn);
collectionBtn1.addEventListener("click", clickCollectionBtn1);
collectionBtn2.addEventListener("click", clickCollectionBtn2);
collectionBtn3.addEventListener("click", clickCollectionBtn3);

document.addEventListener('DOMContentLoaded', function() {
  // Get all audio elements within the section
  var audioElements = document.querySelectorAll('.collection-header--collection-content-text-audio audio');

  // Function to pause all other audio elements and reset them to the beginning
  function pauseAndResetOtherAudios(clickedAudio) {
    audioElements.forEach(function(audio) {
      if (audio !== clickedAudio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0; // Reset to the beginning
      }
    });
  }

  // Add click event listener to each audio element
  audioElements.forEach(function(audio) {
    audio.addEventListener('play', function() {
      pauseAndResetOtherAudios(audio);
    });
  });
});


