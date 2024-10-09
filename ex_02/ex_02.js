let map = L.map('carte').setView([46.6034, 1.8883],6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var epitech = L.icon({
    iconUrl: 'https://www.pngkit.com/png/detail/459-4596239_epitech-epitech-logo-transparent.png',
    iconSize:     [24,35]
   })

var marker = L.marker([48.8662979, 2.3737895], {icon: epitech}).addTo(map);
marker.bindPopup("Paris rocks!").openPopup();
var  marker = L.marker([44.8744232, -0.5784717],{icon: epitech}).addTo(map);
marker.bindPopup("Bordeaux rocks!").openPopup();
var marker = L.marker([45.7682601, 4.8329759],{icon: epitech}).addTo(map);
marker.bindPopup("Lyon rocks!").openPopup();
var marker = L.marker([47.2093559, -1.5755001],{icon: epitech}).addTo(map);
marker.bindPopup("Nantes rocks!").openPopup();
var marker = L.marker([43.6120745, 1.4292167],{icon: epitech}).addTo(map);
marker.bindPopup("Toulouse rocks!").openPopup();

    
