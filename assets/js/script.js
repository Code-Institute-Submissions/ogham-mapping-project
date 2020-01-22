function initMap(){
        var options = {
          center: {lat:52.1409, lng: -10.2640},
          zoom:8,
          mapTypeId: google.maps.MapTypeId.HYBRID,
          minZoom: 9,
          zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM, 
            style: google.maps.ZoomControlStyle.SMALL
          },
          panControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
          }
        }
        var map = new google.maps.Map(document.getElementById('map'), options);
      //Array of Markers
        var markers = [
          {
          coords:{lat:52.12675, lng: -10.30457},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<h1>burnham</h1>'
          },
          {
          coords:{lat:52.2174, lng: -10.3402},
          content:'<h1>Feohanagh</h1>'
          },
          {coords:{lat:52.1301, lng: -10.4503},
          content:'<h1>Dunquin</h1>'
          }
        ];
          // Loop through markers
          for(var i =0;i < markers.length;i++){
             // Add Marker
              addMarker(markers[i]);
          }

        //Add Marker function
      function addMarker(props){
        var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
        //icon:props.iconImage
        });
        //check for custon icon
        if(props.iconImage){
          //set icon image
          marker.setIcon(props.iconImage);
        }
        //check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
      });
        marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
        }
      }

    };