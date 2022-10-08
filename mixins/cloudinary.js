
const cloudinaryHandle = 'firescript';

export const CloudinaryMixins = {
    methods:{
        CloudinaryImage(url, params) {
            return 'https://res.cloudinary.com/' + cloudinaryHandle + '/image/upload/' + this.ImageParams(params) + '/' + url;
        },
        CloudinaryVideo(url, params) {
            return 'https://res.cloudinary.com/' + cloudinaryHandle + '/video/upload/' + this.VideoParams(params) + '/' + url;
        },
        CloudinaryAudio(url, params) {
            return 'https://res.cloudinary.com/' + cloudinaryHandle + '/video/upload/' + this.AudioParams(params) + '/' + url;
        },
        ImageParams(params) {
            if(!params) {
                return 'q_90,f_auto,w_1000,c_fill';
            }else{
                return params;
            }
        },
        VideoParams(params) {
            if(!params) {
                return '';
            }else{
                return params;
            }
        },
        AudioParams(params) {
            if(!params) {
                return '';
            }else{
                return params;
            }
        }
    }
}

