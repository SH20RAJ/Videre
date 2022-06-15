# Videre

The HTML5 video player

![alt text](https://i.gyazo.com/21cf9dfb3e0d5347e2a1b71ca44793fe.png)

### Usage

Place a `div` in your `html` with the appropiate `id`

```html
<div id="player></div>
```
**NOTE:** The `player` id is optional, having a different id is also premited.


Call the [plugin](https://learn.jquery.com/plugins/) function and your player should be ready

```javascript
$(document).ready(function(){
   $('#player').videre({
      video: {
         quality: [{
            // label the quality selector
            label: '720p',
            // provide a source to the video media
            src: 'https://vjs.zencdn.net/v/oceans.mp4?HD'
         },{
            // label the quality selector
            label: '720p',
            // provide a source to the video media
            src: 'https://vjs.zencdn.net/v/oceans.mp4?HD'
         }],
         // video title
         title: 'Title'
      },
      // Available diemnsions are: 2256, 1920, 1280, 1024, 768, 512
      dimensions: 1280
   });
});
```



## Built With

* [Jquery UI](https://jqueryui.com/) - Used to generate volume slider

## Authors

* **Ross** - *initial work* - [Hipady](https://github.com/Hipady)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Hipady/Videre/blob/master/LICENSE) file for details
