// 

import application = require("application");
import {Color} from "color"
declare var android: any
declare var com: any
declare var org: any
var Splash = com.viksaa.ssspalsh



try {
	console.dump(com.viksaa.sssplash);

	com.viksaa.sssplash.lib.activity.AwesomeSplash.extend("co.fitcom.SplashScreen", {
		initSplash: function(configSplash) {
			/* you don't need to override every property */

			//Customize Circular Reveal
			configSplash.setBackgroundColor(org.nativescript.demo.R.color.ns_primary)
			configSplash.setAnimCircularRevealDuration(1000)
			configSplash.setRevealFlagX(com.viksaa.sssplash.lib.cnst.Flags.REVEAL_RIGHT)
			configSplash.setRevealFlagY(com.viksaa.sssplash.lib.cnst.Flags.REVEAL_BOTTOM)


			//Choose LOGO OR PATH; if you don't provide String value for path it's logo by default

			//Customize Logo
			configSplash.setLogoSplash(org.nativescript.demo.R.drawable.icon); //or any other drawable
			configSplash.setAnimLogoSplashDuration(1000); //int ms
			// configSplash.setAnimLogoSplashTechnique(com.daimajia.androidanimations.library.Techniques.Bounce); //choose one form Techniques (ref: https://github.com/daimajia/AndroidViewAnimations)



			// const title = com.tns.NativeScriptApplication.getInstance().getString(org.nativescript.demo.R.string.splash_title)
			//Customize Title
			// configSplash.setTitleSplash('Whispers');
			// // configSplash.setTitleTextColor("#FFFFFF");
			// configSplash.setTitleTextSize(36);
			// configSplash.setAnimTitleDuration(0); //int ms
			// configSplash.setAnimTitleTechnique(com.daimajia.androidanimations.library.Techniques.FlipInX);
			// configSplash.setTitleFont("app/fonts/RobotoRegular.ttf"); //provide string to your font located in app/fonts/

		},
		animationsFinished: function() {
			const intent = new android.content.Intent(com.tns.NativeScriptApplication.getInstance().getApplicationContext(), com.tns.NativeScriptActivity.class)
			intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
			com.tns.NativeScriptApplication.getInstance().startActivity(intent);
		}
	})

} catch (err) {
	console.error(err);
}



application.start({ moduleName: "main-page" });

