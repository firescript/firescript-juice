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

export default defineNuxtPlugin(nuxtApp => {

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Observer);
    }

    const appStore = useAppStore();

    const PageExit = () => {
        appStore.isPageMounted = false;
        appStore.isMenuOpen = false;
        var ss = ScrollSmoother.get();
        ss.paused(true);
    }

    const ResetScroll = () => {

        var st = ScrollTrigger.getAll();
        var o = Observer.getAll();

        for (var i = 0; i < st.length; i++) {
            st[i].kill();
        }

        for (var i = 0; i < o.length; i++) {
            o[i].kill();
        }
    }

    const PageSetup = async (setupComplete) => {

        await nextTick();

        appStore.isLoading = true;

        ResetScroll();

        var imagesLoaded = false;
        var videosLoaded = true;
        var audiosLoaded = true;


        const images = GetAllImagesOnPage();
        // const audios = GetAllAudiosOnPage();
        // const videos = GetAllVideosOnPage();

        PreloadAssets(images, 'images', () => {
            imagesLoaded = true;
        });

        var loadInterval = setInterval(() => {
            if (imagesLoaded && videosLoaded && audiosLoaded) {
                console.log('All assets loaded');
                EverythingsLoaded(setupComplete);
                clearInterval(loadInterval);
            }
        }, 100);

    }

    const EverythingsLoaded = (setupComplete) => {
        if(process.client){

            console.log(process.client, 'client process');

            var ss = SetupScrollSmoother();

            SetupFancyBox(ss);

            appStore.isLoading = false;

            setupComplete();
        }else{
            console.log('not client process');
        }

    }

    const GetAllImagesOnPage = () => {
        var images = document.images;
        var srcList = [];
        for(var i = 0; i < images.length; i++) {
            srcList.push(images[i].src);
        }
        return srcList;
    }

    const GetAllAudiosOnPage = () => {
        var audios = document.getElementsByTagName('audio');
        var srcList = [];
        for(var i = 0; i < audios.length; i++) {
            srcList.push(audios[i]);
        }
        return srcList;
    }

    const GetAllVideosOnPage = () => {
        var videos = document.getElementsByTagName('video');
        var srcList = [];
        for(var i = 0; i < videos.length; i++) {
            srcList.push(videos[i]);
        }
        return srcList;
    }

    const PreloadAssets = (urls, assetType, allAssetsLoadedCallback) => {

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


    }

    const SetupScrollSmoother = () => {
        var ss = ScrollSmoother.get();
        window.ss = ss;
        if(ss){
            console.log('ScrollSmoother already exists');
            ss.scrollTo(0);
            return ss;
        }else{
            ss = ScrollSmoother.create({
                smooth: 2,
                normalizeScroll: true,
                effects: true,
                ScrollTrigger:{
                    markers: false,
                }
            });
            ss.scrollTo(0);
            return ss;
        }
    }

    const SetupFancyBox = (scrollSmoother) => {

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

    return {
        provide: {
            PageExit: PageExit,
            PageSetup: PageSetup,
            SetupScrollSmoother: SetupScrollSmoother,
            gsap: gsap,
            ScrollTrigger: ScrollTrigger,
            ScrollSmoother: ScrollSmoother,
            Observer: Observer
        }
    }

})
