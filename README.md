# VSCodeIMEFix
VSCodeの日本語入力時(厳密にはIME使用時)に変換途中でスペース押すと闇るアレを直すパッチです


## バグってなにさ
Windows7でのみ確認しているため、他のOSでも同様なのかは分かりませんが、


 1. IMEを有効にして日本語を入力
 1. 途中でスペースキーを押して変換する
 1. そのままエンターを押さずに次の文字を入力しようとする
 1. それまで打っていた直前の入力が確定されずに全部吹っ飛ぶ

とかいう闇臭いバグが有りました。これを修正するのがこのパッチです。

## 導入方法
 1. VSCodeのインストール先フォルダを開く
(Windows7の場合は)「C:\Users\\[ユーザ名]\AppData\Local\Code\app-0.1.0」です。
 1. そこから更に「.\resources\app」と階層を進める
 1. index.htmlがあるフォルダに辿り着いたら、そこにこのimefix.min.jsをコピペ
 1. index.htmlの中身を書き換えて、\<script type="text/javascript" src="index.js"></script>の直前に\<script type="text/javascript" src="imefix.min.js"></script>を記述する
 1. 最高の夏を過ごす
```html:index.html
<!-- Copyright (C) Microsoft Corporation. All rights reserved. -->
<!DOCTYPE html>
<html lang="en">
	<head>
	  <!-- 省略 -->
	  
		<script type="text/javascript" src="imefix.min.js"></script>
		<script type="text/javascript" src="index.js"></script>
		
	  <!-- 省略 -->
