declare interface IOMessage {
    userName: string;
    message: string;
}
declare interface UnsplashRandomPhoto {
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
}
