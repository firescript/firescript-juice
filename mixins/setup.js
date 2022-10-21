
// Stores
import { useAppStore } from '@/stores/appStore';

// Fancybox
import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";

// Greensock
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Observer } from "gsap/Observer";

import { nextTick } from 'vue'
import documentReady from '@awaitbox/document-ready'


export const SetupMixins = {
    methods:{

        ResetScroll(){

            var st = ScrollTrigger.getAll();
            var o = Observer.getAll();

            for (var i = 0; i < st.length; i++) {
                st[i].refresh();
            }

            for (var i = 0; i < o.length; i++) {
                o[i].kill();
            }
        },

        PageSetup(setupComplete) {

            // await nextTick();

            appStore.isLoading = true;

            var imagesLoaded = false;
            var videosLoaded = true;
            var audiosLoaded = true;


            const images = GetAllImagesOnPage();
            // const audios = GetAllAudiosOnPage();
            // const videos = GetAllVideosOnPage();

            PreloadAssets(images, 'images', () => {
                imagesLoaded = true;
            });

            var loadInterval = setInterval(async () => {
                if (imagesLoaded && videosLoaded && audiosLoaded) {
                    EverythingsLoaded(setupComplete)
                    clearInterval(loadInterval);
                }
            }, 100);

        },

        EverythingsLoaded(setupComplete){

            // setTimeout(() => {
                // var ss = SetupScrollSmoother();
                // SetupFancyBox(ss);
                appStore.isLoading = false;
                setupComplete();
            // }, 500);
        },

        GetAllImagesOnPage(){
            var images = document.images;
            var srcList = [];
            for(var i = 0; i < images.length; i++) {
                srcList.push(images[i].src);
            }
            return srcList;
        },

        GetAllAudiosOnPage(){
            var audios = document.getElementsByTagName('audio');
            var srcList = [];
            for(var i = 0; i < audios.length; i++) {
                srcList.push(audios[i]);
            }
            return srcList;
        },

        GetAllVideosOnPage(){
            var videos = document.getElementsByTagName('video');
            var srcList = [];
            for(var i = 0; i < videos.length; i++) {
                srcList.push(videos[i]);
            }
            return srcList;
        },

        PreloadAssets(urls, assetType, allAssetsLoadedCallback){

            // return new Promise(resolve => {
            // resolve('resolved');
            // });

            var loadedCounter = 0;
            var toBeLoadedNumber = urls.length;

            if(toBeLoadedNumber > 0) {
                urls.forEach((url) => {
                    preloadAsset(url, () =>{
                        loadedCounter++;
                        checkIfAllAssetsLoaded();
                    }, () => {
                        console.error('Asset failed to load: ' + url);
                        loadedCounter++;
                        checkIfAllAssetsLoaded();
                    });
                });
            }else{
                checkIfAllAssetsLoaded();
            }

            function checkIfAllAssetsLoaded(){
                if(loadedCounter == toBeLoadedNumber){
                    console.info('Number of loaded ' + assetType + ': ' + loadedCounter);
                    allAssetsLoadedCallback();
                }
            }

            function preloadAsset(url, anAssetLoadedCallback, anAssetErrorCallback) {
                if(assetType == 'images') {
                    preloadImage(url, anAssetLoadedCallback, anAssetErrorCallback);
                }else if(assetType == 'videos') {
                    preloadVideo(url, anAssetLoadedCallback, anAssetErrorCallback);
                }else if(assetType == 'audio') {
                    preloadAudio(url, anAssetLoadedCallback, anAssetErrorCallback);
                }
            }

            function preloadImage(url, anAssetLoadedCallback, anAssetErrorCallback) {
                var img = new Image();
                img.src = url;
                img.onload = anAssetLoadedCallback;
                img.onerror = anAssetErrorCallback;
            }

            function preloadVideo(el, anAssetLoadedCallback, anAssetErrorCallback) {
                var video = el;
                video.oncanplay = anAssetLoadedCallback;
                video.onerror = anAssetErrorCallback;
            }

            function preloadAudio(el, anAssetLoadedCallback, anAssetErrorCallback) {
                var audio = el;
                audio.oncanplay = anAssetLoadedCallback;
                audio.onerror = anAssetErrorCallback;
            }


        },

        SetupScrollSmoother(){

            return new Promise(function(resolve, reject) {
                var ss = ScrollSmoother.create({
                    smooth: 2,
                    normalizeScroll: true,
                    effects: true,
                    ScrollTrigger:{
                        markers: false,
                    }
                });
                ss.scrollTo(0);
                resolve(ss);
            })

        },

        SetupFancyBox(scrollSmoother){

            Fancybox.bind("[data-fancybox]",{
                autoFocus: false,
                on:{
                    init: () => {
                        scrollSmoother.paused(true);
                    },
                    closing: () => {
                        scrollSmoother.paused(false);
                    }
                }
            });

        }

    }
}

