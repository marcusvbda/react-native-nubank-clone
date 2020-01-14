```
react-native init NubankClone --template rocketseat-basic

import no mainActivity.java
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }

npm install react-native-vector-icons  --save

react-native link react-native-vector-icons

npm install react-native-iphone-x-helper --save

npm install react-native-svg --save
react-native link react-native-svg
npm install react-native-qrcode-svg --save
npm install @react-native-community/async-storage --save
```