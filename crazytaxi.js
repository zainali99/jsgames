function rd(n,t){return t===undefined&&(t=n,n=0),M.random()*(t-n)+n}function rp(n){return n[~~rd(n.length)]}function normalizeAngle(n){while(n<-Math.PI)n+=Math.PI*2;while(n>Math.PI)n-=Math.PI*2;return n}function xt(n,t){var r={},i;for(i in n)r[i]=n[i];for(i in t)r[i]=t[i];return r}function shape(n,t){var r=n[0].x,u=n[0].y,i;for(c.sv(),c.tr(r,u),c.fs(t),c.bp(),c.moveTo(0,0),i=1;i<n.length;i++)c.lineTo(n[i].x-r,n[i].y-u);c.closePath(),c.fill(),c.rs()}function cache(n,t,i,r){var u=document.createElement("canvas"),e,f;return(u.width=n,u.height=t,e=u.getContext("2d"),i(u,e,n,t),r==="pattern")?(f=e.createPattern(u,"repeat"),f.width=n,f.height=t,f):u}function noop(){}function limit(n,t,i){return M.max(t,M.min(i,n))}function shuffle(n){for(var i,r,t=n.length;t;i=~~(M.random()*t),r=n[--t],n[t]=n[i],n[i]=r);return n}function dist(n,t,i,r){return Math.sqrt((n-i)*(n-i)+(t-r)*(t-r))}function createCycle(n){for(var u=40,i,f,e,r=[],o,s,t=0;t<n.length;t++)i=n[t],f=n[(t+1)%n.length],e=n[(t-1+n.length)%n.length],o=Math.atan2(e.y-i.y,e.x-i.x),s=Math.atan2(f.y-i.y,f.x-i.x),r.push({x:i.x+u*Math.cos(o),y:i.y+u*Math.sin(o)}),r.push({x:i.x+u*Math.cos(s),y:i.y+u*Math.sin(s)});for(t=0;t<r.length;t++)r[t].next=r[(t+1)%r.length];return r[0]}function newCar(color,noLights){return cache(52,24,function(c,n){with(n)fs("rgba(0,0,0,1)"),fr(0,0,c.width,c.height),tr((c.width-50)/2,(c.height-22)/2),fs(color),fr(0,0,50,22),fs("#000"),fr(10,3,5,16),fr(30,3,10,16),fr(15,1,7,1),fr(23,1,7,1),fr(15,20,7,1),fr(23,20,7,1),noLights||(fs("#ff0"),fr(48,0,2,3),fr(48,19,2,3),fs("#f00"),fr(0,0,2,3),fr(0,19,2,3))})}function Game(){window.rotation=!1,this.can=document.querySelector("canvas");with(this.can)width=P.w,height=P.h;this.ctx=window.c=this.can.getContext("2d"),this.start(),this.resize(),addEventListener("resize",this.resize,!1),addEventListener("keydown",this.keyDown.bind(this),!1),addEventListener("keyup",this.keyUp.bind(this),!1),this.lastFrame=Date.now(),raf(function(){G.cycle(),raf(arguments.callee)}),this.elapsedList=[],this.frameCount=0,this.frameCountStart=Date.now()}function World(){var c,u,r,w,l,s,h,a;wld=this,this.score=0,this.particles=[],this.cars=[],this.buildings=[],this.clients=[],this.clientSpots=[],this.textures=[],this.trails=[],this.down={},this.t=0;var y=8e3,nt=8e3,tt=100,it=300,rt=300,i=900,n=50,t=200,f=50,v=function(){},p=function(n,t,i,r,u){var f=new Texture(grass,n,t,i,r),e,o;for(wld.textures.push(f),u.visible=!1,u.collides=!1,e=0;e<10;e++)o=new Tree(f.x+~~rd(0,f.w),f.y+~~rd(0,f.h)),wld.buildings.push(o)},b=function(t,i,r,u,f){var e=new Texture(parking,t,i,r,u),o,t,i,h,c,l,a,s;for(wld.textures.push(e),f.visible=!1,f.collides=!1,wld.textures.push(new Texture(road,e.x-n,e.y+n*2,n,n*2)),wld.textures.push(new Texture(road,e.x+e.w,e.y+n*2,n,n*2)),wld.textures.push(new Texture(road,e.x-n,e.y+e.h-n*4,n,n*2)),wld.textures.push(new Texture(road,e.x+e.w,e.y+e.h-n*4,n,n*2)),o=[],t=e.x+n/2;t<e.x+e.w-n/2;t+=n)for(i=e.y+n;i<e.y+e.h;i+=parking.height)o.push({x:t,y:i}),o.push({x:t,y:i+n*4});for(h=0;h<10;h++)c=~~rd(o.length),l=o[c],o.splice(c,1),a=parking.width/2,s=new Enemy,s.x=l.x,s.y=l.y,s.rotation=rp([M.PI/2,-M.PI/2]),wld.addCar(s)},k=function(t,i,r,u){var o=new Texture(sidewalk,t-n,i-n,r+2*n,u+2*n),f,e;wld.textures.push(o),f=new Building(t,i,r,u),wld.buildings.push(f),e=rp([p,p,v,v,v,b]),e(t,i,r,u,f)},e=10,o=10;for(u=0;u<=o;u++)for(r=0;r<=e;r++)wld.textures.push(new Texture(xwalkv,r*i-t/2-f,u*i-t/2,f,t)),wld.textures.push(new Texture(xwalkv,r*i+t/2,u*i-t/2,f,t)),wld.textures.push(new Texture(xwalkh,r*i-t/2,u*i-t/2-f,t,f)),wld.textures.push(new Texture(xwalkh,r*i-t/2,u*i+t/2,t,f)),wld.textures.push(new Texture(hline,r*i+t/2+f,u*i-hline.height/2,i-t-f*2,hline.height)),wld.textures.push(new Texture(vline,r*i-vline.width/2,u*i+t/2+f,vline.width,i-t-f*2));for(c=!1,u=0;u<o;u++)for(r=0;r<e;r++){c=!c&&r<e-1&&Math.random()<.5;var d=r*i+n+t/2,g=u*i+n+t/2,y=i-2*n-t,nt=i-2*n-t;c&&(y=y*2+t+2*n,r++),k(d,g,y,nt)}for(w=[[-t/2-n,-t/2-n,e*i+4e3,-2e3],[-t/2-n,o*i+t/2+n,e*i+4e3,2e3],[-t/2-n,-t/2-2e3,-2e3,o*i+6e3],[e*i+t/2+n,-t/2-2e3,2e3,o*i+6e3]],w.forEach(function(n){var t=new Building(n[0],n[1],n[2],n[3]);t.visible=!1,wld.buildings.push(t),wld.textures.push(new Texture(water,n[0],n[1],n[2],n[3]))}),this.textures.push(new Texture(sidewalk,-t/2-n,-t/2-n,e*i+2*n+t,n)),this.textures.push(new Texture(sidewalk,-t/2-n,o*i+t/2,e*i+2*n+t,n)),this.textures.push(new Texture(sidewalk,-t/2-n,-t/2-n,n,o*i+2*n+t)),this.textures.push(new Texture(sidewalk,e*i+t/2,-t/2-n,n,o*i+2*n+t)),this.player=this.addCar(new Player),this.player.x=e/2*i,this.player.y=o/2*i,this.camX=this.player.x-P.w/2,this.camY=this.player.y-P.h/2,this.camRotation=0,l=0;l<this.buildings.length-4;l++)s=this.buildings[l],(s.visible&&s.collides||!s.visible&&!s.collides)&&(h=s.getCycle(),h&&(a=this.addCar(new Enemy),a.x=h.x,a.y=h.y,a.follow(h)),this.clientSpots=this.clientSpots.concat(s.getCorners(25)));this.nextClientSpawn=0,this.timeleft=180}function Menu(){this.alpha=0,Easing.tween(this,"alpha",0,1,.5)}function Home(){Menu.call(this)}function End(){Menu.call(this)}function Car(){this.l=50,this.w=30,this.x=0,this.y=0,this.rotation=0,this.speed=0,this.rotationSpeed=M.PI,this.rotationDir=0,this.vectors=[],this.accelerates=!1,this.brakes=!1,this.maxSpeed=500,this.drifts=!0,this.t=0,this.maxAcceleration=400,this.maxDeceleration=1e5,this.maxDeceleration=400,this.speedVector={},this.moveAngle=0,this.moveAngleSpeed=M.PI*1.5,this.radius=10,this.carType=rp([car.white,car.blue,car.red,car.green,car.purple,car.gray])}function Player(){Car.call(this),this.carType=car.yellow,this.client=null,this.hud=new HUD,this.lastGoodPosition=null,this.nextGoodPosition=null,this.nextGoodPositionTimer=0,this.cash=0,this.lives=3,this.dropoffs=0}function Enemy(){Car.call(this),this.path=null,this.maxSpeed=100,this.distanceLeft=0,this.drifts=!1}function Client(){this.x=this.y=0,this.done=!1,this.type=rp([clientRed,clientBlue,clientBlack,clientYellow])}function HUD(){this.msgT=0}function Building(n,t,i,r){this.x=n,this.y=t,this.w=i,this.h=r,this.w<0&&(this.x+=this.w,this.w=-this.w),this.h<0&&(this.y+=this.h,this.h=-this.h),this.visible=!0,this.collides=!0}function Texture(n,t,i,r,u){this.t=n,this.x=t,this.y=i,this.w=r,this.h=u,this.w<0&&(this.x+=this.w,this.w=-this.w),this.h<0&&(this.y+=this.h,this.h=-this.h)}function linear(n,t,i,r){return n/r*i+t}function easeOutBack(n,t,i,r,u){return u==undefined&&(u=1.70158),i*((n=n/r-1)*n*((u+1)*n+u)+1)+t}function easeOutBounce(n,t,i,r){return(n/=r)<1/2.75?i*7.5625*n*n+t:n<2/2.75?i*(7.5625*(n-=1.5/2.75)*n+.75)+t:n<2.5/2.75?i*(7.5625*(n-=2.25/2.75)*n+.9375)+t:i*(7.5625*(n-=2.625/2.75)*n+.984375)+t}function Particle(n,t,i){this.s=n,this.c=t,this.a=i}function Tree(n,t){this.x=n,this.y=t,this.collides=!0}var p,i,P,tweens,Easing;window.focus();var _=window,raf=function(){return _.requestAnimationFrame||_.webkitRequestAnimationFrame||_.mozRequestAnimationFrame||function(n){setTimeout(n,1e3/60)}}(),M=Math,abs=M.abs,to=setTimeout;p=CanvasRenderingContext2D.prototype,p.fr=p.fillRect,p.sv=p.save,p.rs=p.restore,p.tr=p.translate,p.lt=p.lineTo,p.mt=p.moveTo,p.sc=p.scale,p.bp=p.beginPath,p.clg=p.createLinearGradient,p.rt=p.rotate,p.ft=p.fillText,p.alpha=function(n){this.globalAlpha=n},p.fs=function(n){this.fillStyle=n},p.di=function(){this.drawImage.apply(this,arguments)};for(i in p)_[i]=function(n){return function(){c[n].apply(c,arguments)}}(i);P={w:700,h:700,v:130},Game.prototype={start:function(){(this.world=new World,window.location.href.indexOf("l5g")<0)||(this.menu=new Home)},restart:function(){this.world=new World,this.menu=null},gameOver:function(){this.menu=new End},cycle:function(){var t,n,i,r;sv(),sc(this.resolution,this.resolution),t=Date.now(),n=(t-this.lastFrame)/1e3,this.lastFrame=t,this.world.cycle(n),this.menu&&this.menu.cycle(n),Easing.cycle(n),this.frameCount++,this.frameCount===200&&(i=Date.now()-this.frameCountStart,r=this.frameCount/(i/1e3),r<30&&this.setResolution(.6)),rs()},newWorld:function(){this.world=new World},resize:function(){to(function(){var r=innerWidth,u=innerHeight,f=r/u,n=P.w/P.h,o=abs(f-n),t,i,e=document.getElementById("canvascontainer").style;f<=n?(t=r,i=t/n):(i=u,t=i*n),e.width=t+"px",e.height=i+"px"},100)},keyDown:function(n){if((n.keyCode==32||n.keyCode==40||n.keyCode==38)&&n.preventDefault(),n.keyCode==82&&(window.rotation=!window.rotation),this.menu)return this.menu.keyDown(n.keyCode);this.world.keyDown(n.keyCode)},keyUp:function(n){this.menu||this.world.keyUp(n.keyCode)},setResolution:function(n){this.can.width=P.w*n,this.can.height=P.h*n,this.resolution=n}},World.prototype={cycle:function(n){var f,u,i,r,e,t;this.t+=n,this.nextClientSpawn-=n,this.nextClientSpawn<=0&&(this.respawnClients(),this.nextClientSpawn=5),fs(road),fr(0,0,P.w,P.h);for(t in this.cars)this.cars[t].cycle(n);f=this.player.dead?100:600,this.camX=wld.player.x-P.w/2+M.cos(wld.player.moveAngle)*100,this.camY=wld.player.y-P.h/2+M.sin(wld.player.moveAngle)*100,this.shakeTime>0&&(this.camX+=rd(-10,10),this.camY+=rd(-10,10)),u=-this.player.rotation-M.PI/2,i=u-this.camRotation,i=normalizeAngle(i),r=M.max(abs(i)/M.PI,.01)*M.PI*2,i=limit(i,-r*n,r*n),this.camRotation+=i,this.shakeTime-=n,sv(),window.rotation&&(tr(P.w/2,P.h/2),rotate(this.camRotation),tr(-P.w/2,-P.h/2)),tr(-~~this.camX,-~~this.camY),fs(road),fr(~~this.camX,~~this.camY,P.w,P.h),e=50;for(t in this.textures)this.textures[t].render();for(t in this.clients)this.clients[t].cycle(n);for(t=this.cars.length-1;t>=0;t--)this.cars[t].render();for(t=this.particles.length-1;t>=0;t--)this.particles[t].render();for(t in this.buildings)this.buildings[t].render();this.player.render2(),rs(),G.menu||(this.player.hud.cycle(n),this.player.client||(this.timeleft-=n,this.timeleft<=0&&G.gameOver())),this.player.x<-this.roadSize/2&&this.player.explode()},keyUp:function(n){this.down[n]=0,this.evalKeyboardMovement()},keyDown:function(n){this.down[n]=!0,this.evalKeyboardMovement()},evalKeyboardMovement:function(){this.player.rotationDir=0,this.player.accelerates=!1,this.player.brakes=!1,this.down[37]&&(this.player.rotationDir=-1),this.down[39]&&(this.player.rotationDir=1),this.down[38]&&(this.player.accelerates=!0),this.down[40]&&(this.player.brakes=!0),this.down[32]&&G.start()},addParticle:function(n){this.particles.push(n)},removeParticle:function(n){var t=this.particles.indexOf(n);t>=0&&this.particles.splice(t,1)},addBuilding:function(n){return this.buildings.push(n),n},addCar:function(n){return this.cars.push(n),n},removeCar:function(n){var t=this.cars.indexOf(n);t>=0&&this.cars.splice(t,1)},addClient:function(n){return this.clients.push(n),n},removeClient:function(n){var t=this.clients.indexOf(n);t>=0&&this.clients.splice(t,1)},getRandomDestination:function(){return rp(this.clientSpots)},respawnClients:function(){for(var s=M.max(P.w,P.h),e=M.max(P.w,P.h)*2,i,u,o,f,t,r,n=this.clients.length-1;n>=0;n--)r=this.clients[n],u=dist(r.x,r.y,this.camX+P.w/2,this.camY+P.h/2),u>e&&this.clients.splice(n,1);for(i=[],n=0;n<this.clientSpots.length;n++)t=this.clientSpots[n],u=dist(t.x,t.y,this.camX+P.w/2,this.camY+P.h/2),u<e&&u>s&&i.push(t);for(o=10;i.length>0&&this.clients.length<o;)f=~~rd(i.length),t=i[f],i.splice(f,1),r=this.addClient(new Client),r.x=t.x,r.y=t.y},findClosestClientSpot:function(n,t){for(var i,e,u,f,r=0;r<this.clientSpots.length;r++)i=this.clientSpots[r],u=dist(i.x,i.y,n,t),(!f||u<e)&&(f=i,e=u);return f},shake:function(){this.shakeTime=.5}},Menu.prototype={cycle:function(){alpha(this.alpha),fs("rgba(0,0,0,.7)"),fr(0,0,P.w,P.h)}},Home.prototype=xt(Menu.prototype,{cycle:function(n){Menu.prototype.cycle.call(this,n);var t="crazy taxi",i=textWidth(t);drawText(c,t,"white",(P.w-i)/2,150,1,1),t="pick up customers and drive them to their destination",i=textWidth(t,.25),drawText(c,t,"white",(P.w-i)/2,230,.25,1),t="press enter to start",i=textWidth(t,.5),drawText(c,t,"white",(P.w-i)/2,400,.5,1),t="press r to toggle rotation",i=textWidth(t,.5),drawText(c,t,"white",(P.w-i)/2,450,.5,1),alpha(1)},keyDown:function(n){n===13&&(G.menu=null)}}),End.prototype=xt(Menu.prototype,{cycle:function(n){var t,i;Menu.prototype.cycle.call(this,n),t="game over",i=textWidth(t),drawText(c,t,"white",(P.w-i)/2,200,1,1),t="you delivered "+wld.player.dropoffs+" customers",i=textWidth(t,.5),drawText(c,t,"white",(P.w-i)/2,350,.5,1),t="and collected $"+wld.player.cash,i=textWidth(t,.5),drawText(c,t,"white",(P.w-i)/2,400,.5,1),t="press enter to try again",i=textWidth(t,.5),drawText(c,t,"white",(P.w-i)/2,540,.5,1),alpha(1)},keyDown:function(n){n===13&&G.restart()}}),Car.prototype={cycle:function(n){var o,t,i,r,u,s;if(this.t+=n,!this.dead){var c=this.rotation+Math.PI,f=limit(1-this.speed/this.maxSpeed,.5,1),e=normalizeAngle(this.rotation-this.moveAngle),h=limit(e,-this.moveAngleSpeed*f*n,this.moveAngleSpeed*f*n);this.moveAngle+=this.drifts?h:e,o=limit(this.speed*3/this.maxSpeed,-1,1),this.rotation+=this.rotationSpeed*n*this.rotationDir*o,this.x+=this.speed*M.cos(this.moveAngle)*n,this.y+=this.speed*M.sin(this.moveAngle)*n,t=0,i=!1,this.accelerates?(t=this.maxSpeed,this.speed<0&&(i=!0)):this.brakes&&(t=-this.maxSpeed/2,this.speed>0&&(i=!0)),r=t-this.speed,u=i?this.maxAcceleration*2:this.maxAcceleration,r=limit(r,-n*u,n*u),this.speed+=r,s=abs(normalizeAngle(this.rotation-this.moveAngle))/M.PI,this.speed=limit(this.speed-s*n*this.maxDeceleration*2,-this.maxSpeed,this.maxSpeed)}},render:function(){sv(),tr(this.x,this.y),rt(this.rotation);var n=this.dead?brokenCar:this.carType;di(n,-n.width/2,-n.height/2),rs()},explode:function(){var i,r,n;for(this.dead=!0,i=0;i<40;i++){r=rp(["#ff0","#f00","#ff8400","#000"]),n=new Particle(5,r),n.x=this.x+rd(-5,5),n.y=this.y+rd(-5,5),wld.addParticle(n);var u=rd(M.PI*2),f=rd(20,100),t=rd(.5,1);Easing.tween(n,"x",n.x,n.x+M.cos(u)*f,t),Easing.tween(n,"y",n.y,n.y+M.sin(u)*f,t),Easing.tween(n,"a",1,0,t),Easing.tween(n,"s",n.s,n.s*rd(5,10),t,0,linear,function(){wld.removeParticle(n)})}},collidesWith:function(n){return dist(n.x,n.y,this.x,this.y)<this.radius+n.radius}},Player.prototype=xt(Car.prototype,{cycle:function(n){var e=this.x,o=this.y,s=this.rotation,r,i,t,f;if(this.noControlTimer-=n,this.noControlTimer>=0&&(this.accelerates=!1,this.rotationDir=0),Car.prototype.cycle.call(this,n),!this.dead){if(this.nextGoodPositionTimer-=n,this.nextGoodPositionTimer<=0&&(this.lastGoodPosition=this.nextGoodPosition,this.nextGoodPosition={x:this.x,y:this.y},this.nextGoodPositionTimer=.1),this.accelerates&&this.speed<400||this.brakes&&this.speed>-200||abs(this.speed)>20&&abs(normalizeAngle(this.rotation-this.moveAngle))>Math.PI/8){r=-this.l/2,i=new Particle(5,"#fff"),i.x=this.x+M.cos(this.rotation)*r+rd(-5,5),i.y=this.y+M.sin(this.rotation)*r+rd(-5,5),wld.addParticle(i);var f=100,u=rd(.3,.6),h=this.rotation+M.PI+rd(-M.PI/32,M.PI/32);Easing.tween(i,"a",1,0,u),Easing.tween(i,"s",i.s,i.s*rd(5,10),u,0,linear,function(){wld.removeParticle(this)})}t=this,wld.buildings.forEach(function(n){!t.dead&&n.collides&&n.contains(t.x,t.y)&&t.explode()}),wld.cars.forEach(function(n){t.dead||n===t||n.dead||!n.collidesWith(t)||t.collided(n)}),this.client&&(this.clientTimeLeft=M.max(0,this.clientTimeLeft-n),f=dist(this.x,this.y,this.clientSettings.destination.x,this.clientSettings.destination.y),f<this.clientSettings.radius?this.speed===0&&this.drop():this.clientTimeLeft==0&&this.speed<100&&this.drop())}},render2:function(){var t;if(this.clientSettings&&!this.dead){t=this.t%1*this.clientSettings.radius,alpha(.3),c.fillStyle="#0f0",c.lineWidth=4,c.strokeStyle="#0f0",c.beginPath(),c.arc(this.clientSettings.destination.x,this.clientSettings.destination.y,t,0,2*M.PI,!0),c.fill(),c.stroke(),alpha(1);var i=dist(this.x,this.y,this.clientSettings.destination.x,this.clientSettings.destination.y),n=M.atan2(this.clientSettings.destination.y-this.y,this.clientSettings.destination.x-this.x),r=limit(i/1e4,0,1)*200+100;i>300&&(sv(),tr(this.x+M.cos(n)*r,this.y+M.sin(n)*r),c.rotate(n),di(arrow,-arrow.width/2,-arrow.height/2),rs())}},pickup:function(n){this.client||(this.client=n,this.clientSettings=n.getDestinationSettings(),this.clientTimeLeft=this.clientSettings.time,wld.removeClient(n))},drop:function(){this.client.done=!0,this.client.x=this.x+M.cos(this.rotation+M.PI/2)*40,this.client.y=this.y+M.sin(this.rotation+M.PI/2)*40,this.client.findSidewalk(),wld.addClient(this.client);var t=dist(this.x,this.y,this.clientSettings.destination.x,this.clientSettings.destination.y),n=t<=this.clientSettings.radius?this.clientSettings.price:0;n>0?(this.hud.message("reward: $"+n),this.cash+=n):this.hud.message("too slow"),this.client=null,this.clientSettings=null,this.dropoffs++},collided:function(n){this.explode(),n.explode(),wld.removeCar(n),window.collider=n},explode:function(){Car.prototype.explode.call(this),this.lives--,this.lives>0?setTimeout(this.respawn.bind(this),2e3):setTimeout(G.gameOver.bind(G),2e3),wld.shake()},respawn:function(){this.hud.message("cars left: "+this.lives),this.client=null,this.clientTimeLeft=0,this.clientSettings=null,this.dead=!1,this.x=this.lastGoodPosition.x,this.y=this.lastGoodPosition.y,this.speed=0}}),Enemy.prototype=xt(Car.prototype,{cycle:function(n){var i,r,u,t;this.accelerates=!!this.path,i=M.atan2(wld.player.y-this.y,wld.player.x-this.x),r=dist(wld.player.x,wld.player.y,this.x,this.y),abs(normalizeAngle(i-this.rotation))<M.PI/4&&r<300&&(this.accelerates=!1),this.path&&(u=M.atan2(this.path.y-this.y,this.path.x-this.x),t=normalizeAngle(u-this.rotation),t=limit(t,-this.rotationSpeed*n,this.rotationSpeed*n),this.rotation+=t,dist(this.x,this.y,this.path.x,this.path.y)<n*this.speed&&(this.x=this.path.x,this.y=this.path.y,this.follow(this.path.next))),Car.prototype.cycle.call(this,n)},follow:function(n){this.path=n}}),Client.prototype={cycle:function(n){var i=dist(this.x,this.y,wld.player.x,wld.player.y),t,r;i<200&&!wld.player.dead&&wld.player.speed<100&&!this.done&&!wld.player.client?(this.target=null,i<30&&wld.player.speed<50?wld.player.pickup(this):(t=Math.min(50*n,i),this.x+=M.cos(this.angle)*t,this.y+=M.sin(this.angle)*t)):this.target||this.findSidewalk(),this.target?(i=dist(this.x,this.y,this.target.x,this.target.y),t=Math.min(50*n,i),t>0&&(this.angle=M.atan2(this.target.y-this.y,this.target.x-this.x),this.x+=M.cos(this.angle)*t,this.y+=M.sin(this.angle)*t)):this.angle=M.atan2(wld.player.y-this.y,wld.player.x-this.x),r=this,wld.cars.forEach(function(n){var t=dist(r.x,r.y,n.x,n.y);t<20&&abs(n.speed)>20&&r.die()}),this.render()},render:function(){sv(),tr(this.x,this.y),rt(this.angle),di(this.type,-this.type.width/2,-this.type.height/2),rs()},getDestinationSettings:function(){var n=wld.getRandomDestination(),i=abs(this.x-n.x)+abs(this.y-n.y),t=~~rd(1,4),r=1/100,u=i/wld.player.maxSpeed,f=u*4,e=~~(t/3*r*i),o=(1-t/4)*f;return{destination:n,exigence:t,time:o,price:M.max(5,e),radius:200}},die:function(){var t;for(wld.removeClient(this),t=0;t<40;t++){var n=new Particle(4,"#950000",1),i=rd(M.PI*2),r=rd(5,25),u=rd(.05,.2);n.x=this.x,n.y=this.y,wld.addParticle(n),Easing.tween(n,"a",1,0,1,3,linear,n.remove.bind(n)),Easing.tween(n,"x",n.x,n.x+M.cos(i)*r,u),Easing.tween(n,"y",n.y,n.y+M.sin(i)*r,u)}wld.player.hud.message("don't kill customers!")},findSidewalk:function(){var n=wld.findClosestClientSpot(this.x,this.y);this.target={x:n.x+rd(-15,15),y:n.y+rd(-15,15)}}},HUD.prototype={cycle:function(n){var t,r;this.msgT-=n,wld.player.dead?t="wasted":this.msgT>0?t=this.msg:wld.player.client?(r=M.ceil(M.max(0,wld.player.clientTimeLeft)),t="customer time left: "+r):t="find a customer";var i=textWidth(t,.5),u=(P.w-i)/2,f=P.h/2+200;drawText(c,t,"white",u,f,.5,1),t="cash: $"+wld.player.cash,i=textWidth(t,.5),drawText(c,t,"white",P.w-i-20,20,.5,1),drawText(c,"cars: "+wld.player.lives,"white",20,20,.5,1),wld.player.client||(t="time: "+~~wld.timeleft,i=textWidth(t,.5),drawText(c,t,"white",(P.w-i)/2,20,.5,1))},message:function(n){this.msgT=2,this.msg=n.toLowerCase()}},Building.prototype={render:function(){var r,n,u;if(this.visible&&!(this.x>wld.camX+P.w+P.v)&&!(this.y>wld.camY+P.h+P.v)&&!(this.x+this.w<wld.camX-P.v)&&!(this.y+this.h<wld.camY-P.v)){var e={x:this.x,y:this.y},w={x:this.x+this.w,y:this.y},g={x:this.x+this.w,y:this.y+this.h},b={x:this.x,y:this.y+this.h},f=this.pointUpperPosition(this.x,this.y),k=this.pointUpperPosition(this.x+this.w,this.y),o=this.pointUpperPosition(this.x+this.w,this.y+this.h),d=this.pointUpperPosition(this.x,this.y+this.h),t=25,u=f.x,r=f.y,nt=o.x-f.x,tt=o.y-f.y,s=20;if(sv(),tr(u,r),fs(roofb),fr(0,0,nt,tt),fs(roof),fr(s,s,nt-2*s,tt-2*s),rs(),fs("#00f"),f.x>e.x){shape([e,f,d,b],side1);var c=this.h/(2*t),i=.3,h=this.h/c;for(n=i/2;n<1;n+=i)for(r=this.y+h/2;r<this.y+this.h;r+=h){var a=this.pointUpperPosition(this.x,r-t/2,n),v=this.pointUpperPosition(this.x,r-t/2,n+i/2),y=this.pointUpperPosition(this.x,r+t/2,n),p=this.pointUpperPosition(this.x,r+t/2,n+i/2);shape([a,v,p,y],"black")}}if(k.x<w.x){shape([k,w,g,o],side1);var c=this.h/(2*t),i=.3,h=this.h/c;for(n=i/2;n<1;n+=i)for(r=this.y+h/2;r<this.y+this.h;r+=h){var a=this.pointUpperPosition(this.x+this.w,r-t/2,n),v=this.pointUpperPosition(this.x+this.w,r-t/2,n+i/2),y=this.pointUpperPosition(this.x+this.w,r+t/2,n),p=this.pointUpperPosition(this.x+this.w,r+t/2,n+i/2);shape([a,v,p,y],"black")}}if(f.y>e.y){shape([e,f,k,w],side2);var c=this.w/(2*t),i=.3,l=this.w/c;for(n=i/2;n<1;n+=i)for(u=this.x+l/2;u<this.x+this.w;u+=l){var a=this.pointUpperPosition(u-t/2,this.y,n),v=this.pointUpperPosition(u-t/2,this.y,n+i/2),y=this.pointUpperPosition(u+t/2,this.y,n),p=this.pointUpperPosition(u+t/2,this.y,n+i/2);shape([a,v,p,y],"black")}}if(d.y<b.y){shape([b,d,o,g],side2);var c=this.w/(2*t),i=.3,l=this.w/c;for(n=i/2;n<1;n+=i)for(u=this.x+l/2;u<this.x+this.w;u+=l){var a=this.pointUpperPosition(u-t/2,this.y+this.h,n),v=this.pointUpperPosition(u-t/2,this.y+this.h,n+i/2),y=this.pointUpperPosition(u+t/2,this.y+this.h,n),p=this.pointUpperPosition(u+t/2,this.y+this.h,n+i/2);shape([a,v,p,y],"black")}}}},pointUpperPosition:function(n,t,i){isNaN(i)&&(i=1);var r=n-(wld.camX+P.w/2),u=t-(wld.camY+P.h/2);return{x:n+r/P.h*200*i,y:t+u/P.h*200*i}},contains:function(n,t){return n>=this.x-10&&t>=this.y-10&&n<=this.x+this.w+10&&t<=this.y+this.h+10},getCycle:function(){for(var n=createCycle(this.getCorners(100)),i=rd(8),t=0;t<i;t++)n=n.next;return n},getCorners:function(n){return[{x:this.x-n,y:this.y-n},{x:this.x+this.w+n,y:this.y-n},{x:this.x+this.w+n,y:this.y+this.h+n},{x:this.x-n,y:this.y+this.h+n}]}},Texture.prototype={render:function(){this.x>wld.camX+P.w+P.v||this.y>wld.camY+P.h+P.v||this.x+this.w<wld.camX-P.v||this.y+this.h<wld.camY-P.v||(sv(),tr(this.x,this.y),fs(this.t),fr(0,0,this.w,this.h),rs())}};var defs={a:[[1,1,1],[1,,1],[1,1,1],[1,,1],[1,,1]],b:[[1,1,1],[1,,1],[1,1,],[1,,1],[1,1,1]],c:[[1,1,1],[1,,],[1,,],[1,,],[1,1,1]],d:[[1,1,0],[1,,1],[1,,1],[1,,1],[1,1,1]],e:[[1,1,1],[1,,],[1,1,],[1,,],[1,1,1]],f:[[1,1,1],[1,,],[1,1,],[1,,],[1,,]],g:[[1,1,1],[1,,],[1,,],[1,,1],[1,1,1]],h:[[1,,1],[1,,1],[1,1,1],[1,,1],[1,,1]],i:[[1,1,1],[,1,],[,1,],[,1,],[1,1,1]],j:[[,,1],[,,1],[,,1],[1,,1],[1,1,1]],k:[[1,,1],[1,,1],[1,1,],[1,,1],[1,,1]],l:[[1,,0],[1,,],[1,,],[1,,],[1,1,1]],m:[[1,,1],[1,1,1],[1,,1],[1,,1],[1,,1]],n:[[1,1,1],[1,,1],[1,,1],[1,,1],[1,,1]],o:[[1,1,1],[1,,1],[1,,1],[1,,1],[1,1,1]],p:[[1,1,1],[1,,1],[1,1,1],[1,,],[1,,]],r:[[1,1,1],[1,,1],[1,1,],[1,,1],[1,,1]],s:[[1,1,1],[1,,],[1,1,1],[,,1],[1,1,1]],$:[[,,1,,0],[1,1,1,1,1],[1,,1,,],[1,1,1,1,1],[,,1,,1],[1,1,1,1,1],[,,1,,]],t:[[1,1,1],[,1,],[,1,],[,1,],[,1,]],u:[[1,,1],[1,,1],[1,,1],[1,,1],[1,1,1]],v:[[1,,1],[1,,1],[1,,1],[1,,1],[,1,]],w:[[1,,,,1],[1,,,,1],[1,,1,,1],[1,,1,,1],[,1,,1,]],x:[[1,,1],[1,,1],[,1,],[1,,1],[1,,1]],y:[[1,,1],[1,,1],[1,1,1],[,1,],[,1,]],z:[[1,1,1],[0,0,1],[0,1,0],[1,0,0],[1,1,1]],"'":[[1]],".":[[0],[0],[0],[0],[1]]," ":[[,0],[,],[,],[,],[,]],"-":[[,0],[,],[1,1],[,],[,]],":":[[0],[1],[],[1],[]],"?":[[1,1,1],[,,1],[,1,1],[,,],[,1,]],"!":[[,1,],[,1,],[,1,],[,,],[,1,]],"1":[[1,1,0],[,1,],[,1,],[,1,],[1,1,1]],"2":[[1,1,1],[,,1],[1,1,1],[1,,],[1,1,1]],"3":[[1,1,1],[,,1],[,1,1],[,,1],[1,1,1]],"4":[[1,,0],[1,,],[1,,1],[1,1,1],[,,1]],"5":[[1,1,1],[1,,],[1,1,],[,,1],[1,1,]],"6":[[1,1,1],[1,,],[1,1,1],[1,,1],[1,1,1]],"7":[[1,1,1],[,,1],[,1,],[,1,],[,1,]],"8":[[1,1,1],[1,,1],[1,1,1],[1,,1],[1,1,1]],"9":[[1,1,1],[1,,1],[1,1,1],[,,1],[1,1,1]],"0":[[1,1,1],[1,,1],[1,,1],[1,,1],[1,1,1]]},Font={},createFont=function(n){var i,t;Font[n]={};for(i in defs)t=defs[i],Font[n][i]=cache(t[0].length*10+10,t.length*10,function(i,r){var u,f;for(r.fs(n),u=0;u<t.length;u++)for(f=0;f<t[u].length;f++)t[u][f]&&r.fr(f*10,u*10,10,10)})};createFont("white"),createFont("black");var drawText=function(n,t,i,r,u,f,e){var o,h,s;for(f=f||1,e&&drawText(n,t,"black",r,u+5,f,!1),n.sv(),n.tr(r,u),n.sc(f,f),r=0,o=0;o<t.length;o++)h=t.charAt(o),s=Font[i][h],s&&(n.di(s,r,0),r+=s.width);n.rs()},textWidth=function(n,t){for(var r=0,u=n.length,i;u--;)i=Font.white[n.charAt(u)],r+=i?i.width:0;return r*(t||1)},s=4,car={white:newCar("#fff"),broken:newCar("#1b1b1b",!0),yellow:newCar("#ff0"),blue:newCar("#00f"),red:newCar("#f00"),green:newCar("#0f0"),purple:newCar("#f0f"),gray:newCar("#6c6c6c")},client=function(n){return cache(20,30,function(t,i){i.fs(n);var r=14,u=18;i.fr((t.width-r)/2,(t.height-u)/2,r,u),i.bp(),i.arc(t.width/2,t.height/2-10,4,0,M.PI*2,!0),i.arc(t.width/2,t.height/2+10,4,0,M.PI*2,!0),i.fill(),i.fs("#e99a79"),i.bp(),i.arc(t.width/2,t.height/2,6,0,M.PI*2,!0),i.fill(),i.fs("#000"),i.fr(t.width/2+2,t.height/2-3,2,2),i.fr(t.width/2+2,t.height/2+3,2,-2)})},clientRed=client("#900"),clientBlack=client("#000"),clientBlue=client("#00f"),clientYellow=client("#880"),arrow=cache(40,40,function(c,n){with(n)tr(c.width/2,c.height/2),rotate(Math.PI/2),tr(-c.width/2,-c.height/2),tr(0,c.height),sc(1,-1),fs("#fff"),bp(),mt(20,40),lt(40,20),lt(30,20),lt(30,0),lt(10,0),lt(10,20),lt(0,20),fill()}),brokenCar=cache(50,22,function(n,t){with(t)fs("#1b1b1b"),fr(0,0,50,22),fs("#000"),fr(10,3,5,16),fr(30,3,10,16),fr(15,1,7,1),fr(23,1,7,1),fr(15,20,7,1),fr(23,20,7,1)}),grass=cache(200,200,function(n,t){for(var i=4,u,r=0;r<n.width;r+=i)for(u=0;u<n.height;u+=i)t.fs("rgb(0,"+(128+~~rd(-50,50))+", 0)"),t.fr(r,u,i,i)},"pattern"),sidewalk=cache(100,100,function(n,t){for(var i=8,u,e,f,r=0;r<n.width;r+=s)for(u=0;u<n.height;u+=s)e=r<i||u<i||r>=n.width-i||u>=n.height-i||r>=n.width/2-i&&r<=n.width/2+i||u>=n.height/2-i&&u<=n.height/2+i,f=(e?80:100)+~~rd(-10,10),t.fs("rgb("+f+", "+f+", "+f+")"),t.fr(r,u,s,s)},"pattern"),road=cache(200,200,function(n,t){for(var r,u,i=0;i<n.width;i+=s)for(r=0;r<n.height;r+=s)u=40+~~rd(-10,10),t.fs("rgb("+u+", "+u+", "+u+")"),t.fr(i,r,s,s)},"pattern"),water=cache(100,100,function(n,t){for(var r,i=0;i<n.width;i+=s)for(r=0;r<n.height;r+=s)t.fs("rgb(0, "+~~(168+~~rd(-10,10))+", 255)"),t.fr(i,r,s,s)},"pattern"),xwalkh=cache(25,50,function(n,t){for(var r,u,i=~~(n.width/4);i<n.width*.75;i+=s)for(r=0;r<n.height;r+=s)u=255-~~rd(10,50),t.fs("rgb("+u+", "+u+", "+u+")"),t.fr(i,r,s,s)},"pattern"),xwalkv=cache(50,25,function(n,t){for(var r,u,i=0;i<n.width;i+=s)for(r=~~(n.height/4);r<n.height*.75;r+=s)u=255-~~rd(10,50),t.fs("rgb("+u+", "+u+", "+u+")"),t.fr(i,r,s,s)},"pattern");roof=cache(100,100,function(n,t){for(var r,u,i=0;i<n.width;i+=s)for(r=0;r<n.height;r+=s)u=100+~~rd(-10,10),t.fs("rgb("+u+", "+u+", "+u+")"),t.fr(i,r,s,s)},"pattern"),roofb=cache(100,100,function(n,t){for(var r,u,i=0;i<n.width;i+=s)for(r=0;r<n.height;r+=s)u=50+~~rd(-10,10),t.fs("rgb("+u+", "+u+", "+u+")"),t.fr(i,r,s,s)},"pattern"),side1=cache(100,100,function(n,t){for(var r,u,i=0;i<n.width;i+=s)for(r=0;r<n.height;r+=s)u=128+~~rd(-5,5),t.fs("rgb("+u+", "+u+", "+u+")"),t.fr(i,r,s,s)},"pattern"),side2=cache(100,100,function(n,t){for(var r,u,i=0;i<n.width;i+=s)for(r=0;r<n.height;r+=s)u=153+~~rd(-5,5),t.fs("rgb("+u+", "+u+", "+u+")"),t.fr(i,r,s,s)},"pattern"),hline=cache(100,4,function(n,t){for(var r,u,i=n.width*.25;i<n.width*.75;i+=s)for(r=0;r<n.height;r+=s)u=255-~~rd(10,50),t.fs("rgb("+u+", "+u+", "+u+")"),t.fr(i,r,s,s)},"pattern"),vline=cache(4,100,function(n,t){for(var r,u,i=n.height*.25;i<n.height*.75;i+=s)for(r=0;r<n.height;r+=s)u=255-~~rd(10,50),t.fs("rgb("+u+", "+u+", "+u+")"),t.fr(r,i,s,s)},"pattern"),tree=cache(200,200,function(n,t){for(var r,u,f,e,i=0;i<n.width;i+=s)for(r=0;r<n.height;r+=s)u=dist(n.width/2,n.height/2,i,r),f=u<n.width*.4&&Math.random()<.8,f&&(e=50+~~rd(-25,25),t.fs("rgb(0, "+e+", 0)"),t.fr(i,r,s,s))}),tree2=cache(150,150,function(n,t){for(var r,u,f,e,i=0;i<n.width;i+=s)for(r=0;r<n.height;r+=s)u=dist(n.width/2,n.height/2,i,r),f=u<n.width*.4&&Math.random()<.8,f&&(e=50+~~rd(-25,25),t.fs("rgb(0, "+e+", 0)"),t.fr(i,r,s,s))}),parking=cache(100,300,function(n,t){var i,r,f,u;for(t.fs(road),t.fillRect(0,0,n.width,n.height),i=0;i<n.width;i+=s)for(r=0;r<n.height;r+=s)f=r<s||r>=n.height-s||(i<s||i>=n.width-s||i>=n.width/2-s&&i<=n.width/2+s)&&(r<n.height*.3||r>=n.height*.7),f&&(u=255-~~rd(10,50),t.fs("rgb("+u+", "+u+", "+u+")"),t.fr(i,r,s,s))},"pattern"),addEventListener("load",function(){G=new Game}),tweens=[],Easing={tween:function(n,t,i,r,u,f,e,o){tweens.push({o:n,p:t,a:i,b:r,d:u,l:f||0,f:e||linear,e:o||noop,t:0})},cycle:function(n){for(var t,i=tweens.length-1;i>=0;i--)t=tweens[i],t.l>0?(t.l-=n,t.o[t.p]=t.a):(t.t=M.min(t.d,t.t+n),t.o[t.p]=t.f(t.t,t.a,t.b-t.a,t.d),t.t==t.d&&(t.e.call(t.o),tweens.splice(i,1)))}},Particle.prototype={render:function(){alpha(this.a),fs(this.c),fr(this.x-this.s/2,this.y-this.s/2,this.s,this.s),alpha(1)},remove:function(){wld.removeParticle(this)}},Tree.prototype=xt(Building.prototype,{render:function(){if(!(this.x>wld.camX+P.w+200)&&!(this.y>wld.camY+P.h+200)&&!(this.x<wld.camX-200)&&!(this.y<wld.camY-200)){var t=this.pointUpperPosition(this.x,this.y,.2),n=this.pointUpperPosition(this.x,this.y,.4);c.strokeStyle="#5a3900",c.lineWidth=15,bp(),mt(this.x,this.y),lt(n.x,n.y),stroke(),di(tree,t.x-tree.width/2,t.y-tree.height/2),di(tree2,n.x-tree2.width/2,n.y-tree2.height/2)}},contains:function(n,t){return abs(n-this.x)<15&&abs(t-this.y)<15},getCycle:function(){return null},getCorners:function(){return[]}})