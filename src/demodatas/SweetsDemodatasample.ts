import SweetsModel from '@/models/SweetsModel';

const sweetsSampleResponse: SweetsModel[] = [
    {
        id: 1,
        shop_id: 1,
        name: "もちもちシュー",
        price: "140円",
        description: "北斗市産「ふっくりんこ」の米粉を皮に使用したしっとり・もちもちなシュークリームです。持つとずっしりと重さを感じられるくらいにクリームたっぷりと詰めています。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130827040317.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:58.000Z",
        updated_at: "2019-01-17T11:51:58.000Z"
    },
    {
        id: 2,
        shop_id: 2,
        name: "りんごとクリームのたい焼き",
        price: "200円",
        description: "コンポートした北海道産リンゴとカスタードクリームに、シナモンを振りかけて、アップルパイのような味に仕上げました。他に、地物のじゃがいもとチーズを合わせた「じゃがいもとチーズのたい焼（200円）」も人気です。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130830040341.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:58.000Z",
        updated_at: "2019-01-17T11:51:58.000Z"
    },
    {
        id: 3,
        shop_id: 3,
        name: "シュークリーム",
        price: "281円",
        description: "道産の素材を使い、しっかり焼き込んだ皮はほんのり塩味がきいています。道産の生クリームとカスタードクリームを合わせた”ディプロマット”というクリームをたっぷりつめ、底にもカスタードが入っています。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180201041808.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:58.000Z",
        updated_at: "2019-01-17T11:51:58.000Z"
    },
    {
        id: 4,
        shop_id: 4,
        name: "6（シックス）ロール",
        price: "1,944円",
        description: "人気定番5種（※写真右手前からプレーン、チーズ、ショコラ。写真左手前からマロン、抹茶）に季節商品1品が入った、お得なセット。冷凍タイプは長時間の持ち帰りや発送も出来る。（再冷凍可）",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161207021515.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:58.000Z",
        updated_at: "2019-01-17T11:51:58.000Z"
    },
    {
        id: 5,
        shop_id: 5,
        name: "苺ショートケーキ",
        price: "350円",
        description: "定番の商品ではありますが、甘さ控えめの生クリームで、洋酒も使用していないため、子供さんにも安心して食べてもらえるように作っています。と店主の水島さん。そんな苺ショートは「何個でも食べられる！」と大人気！",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20170119025225.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 6,
        shop_id: 6,
        name: "はるの餅",
        price: "120円",
        description: "当店の商品はひとつひとつが手作りです。中でも店名を冠した「はるの餅」は苦味のないくるみが自家製の餡をさっぱりさせ、食べやすいと人気です。ぜひこの機会に一度足を運んでみてください！",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20170123040703.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 7,
        shop_id: 7,
        name: "グランショコラ",
        price: "370円",
        description: "味の構成を複雑にせず、シンプルな中にも吟味した素材で確かな「美味しい」をご提供いたします。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20170118023218.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 8,
        shop_id: 8,
        name: "はちみつと4種のナッツ",
        price: "350円",
        description: "定番のフランス菓子を中心に季節の創作生菓子と、マカロンなどの焼菓子を販売。素材を選び出来たてのおいしさを味わっていただけるよう少量ずつ作っている。毎日12時に焼き上がるクロワッサンも人気。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130830043315.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 9,
        shop_id: 9,
        name: "ハートのデコレーションケーキ",
        price: "3,500円",
        description: "創業以来、30年間同じ時を守り続けお客さまに親しまれているのが、シフォンケーキ、お店の代表作です。ココア、モカ、バナナ、紅茶、プレーンその他季節により、イチゴや抹茶なども登場します。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20170118043008.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 10,
        shop_id: 10,
        name: "峩朗の月(ズコットチーズケーキ)",
        price: "１,000円",
        description: "昭和28年創業。北斗市、上磯駅前商店街で焼き菓子を中心に、和洋菓子製造販売をしています。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161207021645.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 11,
        shop_id: 11,
        name: "メルチーズ(8個入)",
        price: "1,250円",
        description: "北海道で1番最初につくられた一口タイプのチーズスフレ「函館メルチーズ」",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130830043816.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 12,
        shop_id: 12,
        name: "サンドウィッチ",
        price: "450～620円",
        description: "ヨーロピアンスタイルの「オーダーしてから作る」こだわりの出来立てでフレッシュなサンドイッチ。6種のバンズ(パン)に常時4～5種のガルニ(具材)とソース4種で自分好みの組合わせを楽しめます。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130831083546.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 13,
        shop_id: 13,
        name: "贅沢どら",
        price: "1個　226円",
        description: "どら焼専門店です。40種類以上のどら焼をメインに、製造販売しております。素材は北海道産で小麦粉、卵、あずき、バター等々出来る限り道産にこだわり毎日美味しさを追求しております。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130828060253.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 14,
        shop_id: 15,
        name: "いかようかん",
        price: "1,188円",
        description: "１９９７年に販売をしております「いかようかん」は、函館のお土産として大変好評です。他にも季節の菓子や、各種引出物やケーキ等洋菓子も取揃えております。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180202125140.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 15,
        shop_id: 16,
        name: "はこだて雪んこ",
        price: "1,080円",
        description: "「嘉福堂」では、北海道限定のスイートポテト大福「はこだて雪んこ」を作っています。地産に基づいて作られた、半解凍でアイスの様に食べられるスイーツです。ＪＲ函館駅、函館空港等で購入戴けます。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130828062252.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 16,
        shop_id: 17,
        name: "トラピストの丘",
        price: "577円",
        description: "『いつの時代も皆様に満足していただける』というテーマがあり、品質・安心・安全はもとより美味しさを積極的に追及し、企業理念の進歩・信用・幸福を基に誰からでも愛される商品を作っています。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130831083743.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 17,
        shop_id: 18,
        name: "フレジェ",
        price: "368円",
        description: "季節を感じていただけるオリジナルケーキ。豊富な品揃えの焼き菓子はギフトにも最適です。また冷凍で地方発送もできるクリミィーチーズロール（８ケ入￥945）も人気です。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130831084411.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 18,
        shop_id: 19,
        name: "串だんご",
        price: "108円",
        description: "看板商品の「やきだんご」をはじめ、串団子はあん・ごま・きなこ・しょうゆの４種類。生地には、北海道産米１００％使い、きらら３９７やほしのゆめを主に、独自にブレンドしています。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130831074945.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 19,
        shop_id: 20,
        name: "ショコラサブレ（6枚入り）",
        price: "800円",
        description: "道産小麦「春よ恋」全粒粉とバターをふんだんに使用した、口当たりの良いサブレ。素材本来の風味豊かな生地は、厳選ビターチョコのトッピングとも相性◎。優しい甘さとほろほろ砕ける食感が、幅広い世代で人気に。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161206092623.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 20,
        shop_id: 21,
        name: "ひとめぐりバウム",
        price: "270円",
        description: "人気の「はーどくーへん」の中に北海道産のクリームを使った生地を流して焼き込んだ濃厚な焼菓子です。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180219051453.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 21,
        shop_id: 22,
        name: "箱館塩かすてら",
        price: "1,260　840円",
        description: "スウィーツギャラリー北じまは,工場直営でパン・和菓子・洋菓子といった多彩なスイーツの品数を揃えております。中でも一番のおすすめが箱館塩かすてらと箱館二十間坂ばうむが人気スイーツとなっております。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130829033011.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 22,
        shop_id: 23,
        name: "チーズオムレット8個入り",
        price: "1,296円",
        description: "函館山から広がる町並みの始まりは洋館が立ち並ぶ石畳の坂。静かな黄昏の鐘に、時を忘れ佇むと海からの風に町の光が瞬く…。ノスタルジックな雰囲気の赤レンガ倉庫群でゆったりとお買い物をお楽しみください。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130830022625.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 23,
        shop_id: 24,
        name: "純生桜ロールケーキ",
        price: "1,300円",
        description: "桃色のふわふわスポンジでほんのり桜風味の純生クリームと桜葉入りのブリュレを巻きました。春の香りをお楽しみいただけます。冷凍の状態で販売しております。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161122051412.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 24,
        shop_id: 25,
        name: "箱館奉行所最中",
        price: "150円",
        description: "上新川町本店を含め市内4店舗で営業しております。函館銘菓の販売はもちろんのこと、季節の和洋菓子や冠婚葬祭用の引菓子、餅菓子等、巾広く如何様にもご調整致します。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130829042138.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 25,
        shop_id: 26,
        name: "五稜の里",
        price: "129円",
        description: "甘さを抑えた白あんと、ミルクとバターの風味が決め手の焼菓子！",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130829042505.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 26,
        shop_id: 27,
        name: "苺の生ロール",
        price: "1,200円",
        description: "ケーキ、焼菓子、マカロン等、数多く取り扱っています。春は〝桜のケーキ〟夏は〝桃のタルト〟秋冬は〝アップルパイ〟等、季節に合わせた旬の素材を使うお菓子作りをしています。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130830033541.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 27,
        shop_id: 28,
        name: "じゃが昆布",
        price: "120円",
        description: "函館近郊で採れたジャガイモと真昆布を使ったヘルシーな新感覚焼き菓子。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130829050353.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 28,
        shop_id: 29,
        name: "焼菓子Bouquet",
        price: "各540円",
        description: "菓子職人が手作りで焼き上げる伝統の洋菓子を、異国風の錦絵をあしらったモダンで可愛らしい9種類の小箱に入れてお届けします。　函館ならではのお土産、贈り物として、どうぞお役立てくださいませ。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161205041628.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 29,
        shop_id: 30,
        name: "函館散歩（カステラ饅頭）",
        price: "110円",
        description: "北海道新幹線開通にあわせ3年の歳月をかけて作り上げた「函館散歩」です。十勝音更産エリモ小豆のこしあんを道産小麦を使ったしっとり生地で包み焼き上げました。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161130115437.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 30,
        shop_id: 31,
        name: "和栗のモンブラン",
        price: "450円",
        description: "サックリと軽い食感の焼きメレンゲの上に和栗のクリームをたっぷりと乗せた贅沢なモンブランです。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161206024806.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 31,
        shop_id: 32,
        name: "ボンボンショコラ各種",
        price: "190円",
        description: "原材料のカカオ本来の香りを引き立てる様、一粒一粒手作りしたこだわりのチョコレート。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161215095749.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 32,
        shop_id: 33,
        name: "アップルパイ",
        price: "1,566円",
        description: "七飯のりんごが沢山入ったサクッとしたアップルパイです。開店当初から大人気の商品です。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180530104717.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 33,
        shop_id: 34,
        name: "ショートベリー",
        price: "300円",
        description: "子供から大人まで幅広い年齢層に対応したバースディケーキ・生ケーキ・焼菓子・ギフト商品など、多数ご用意しています。濃厚な味わいながら甘すぎず最後までサッパリとしたソフトもおススメです。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130830031720.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 34,
        shop_id: 35,
        name: "シュークリーム",
        price: "162円",
        description: "サクサクッとした食感のシュー皮にバニラビーンズをすりおろした濃厚なカスタードクリームをたっぷりと絞り込んだホテルならではの絶品シュークリームです。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20170117045405.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 35,
        shop_id: 36,
        name: "バターどら焼",
        price: "189円",
        description: "創業からこだわりの全て手作りの逸品!!卵と牛乳のみでのばした生地は濃厚でしっとり。自家製粒あん（十勝産小豆使用、刻み栗入り）と100％バターが合わさり更にコクとまろやかさがＵＰ!!地方の方々にも人気!!",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180130045600.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 36,
        shop_id: 37,
        name: "五勝手屋",
        price: "270円",
        description: "いにしえの刻より、変わらぬ味を守り続ける五勝手屋は、その昔、紋菓をつくって藩公に献上したのがはじまりです。明治3年に至って、長い伝統と累代の苦心を込めて練り上げた秘伝の羊かんを販売することとなりました。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130831075114.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 37,
        shop_id: 39,
        name: "ロビンフット（アップルパイ）",
        price: "370円",
        description: "七飯町のりんごをひとつひとつ煮こみバターたっぷりのパイで包んで焼き上げています。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161205052024.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 38,
        shop_id: 40,
        name: "咸臨丸",
        price: "150（咸臨丸　咸臨丸は当店末廣庵の登録商標です）円",
        description: "今も木古内町のサラキ岬沖に眠る咸臨丸。その咸臨丸の功績を称え、菓子にしました。２種類の餡をサンド、白餡は酒を、黒餡は胡麻を使用し怒濤の幕末維新を背景に栄光と悲劇の波に揉まれた咸臨丸を表現しました。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130829060059.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 39,
        shop_id: 41,
        name: "アップルパイ",
        price: "162円",
        description: "毎日朝に焼きあがるアップルパイとクロワッサンが人気です。季節ごとにメニューがかわるショートケーキ類も日々研究しています。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20130829060903.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 40,
        shop_id: 42,
        name: "ゴールデン",
        price: "220円",
        description: "アーモンドとヘーゼルナッツの粉末・少量の薄力粉・砂糖はグラニュー糖・トレハロース・卵は卵白のみで焼き上げたしっとり生地にいちごゼリーといちごクリームで仕上げてあります。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161205050315.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 41,
        shop_id: 43,
        name: "ケーキセット",
        price: "1080円",
        description: "なし",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161122124241.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 42,
        shop_id: 44,
        name: "フォトケーキ（15cm）",
        price: "3,600円",
        description: "お子様の写真やご家族の記念写真、好きなキャラクターの写真など何でもプリントしてケーキの上にのせてお作りします。もちろん、可食インクと紙を使用しますので、全て食べられます。12cm～24cmまで、お好きなサイズでお作りします。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161130110534.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 43,
        shop_id: 45,
        name: "カロメリパイ",
        price: "230円",
        description: "発酵バターを使用し、北海道産生クリームとカスタードを入れたサクサクパイ。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161228023958.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 44,
        shop_id: 46,
        name: "豆乳函館しふぉん",
        price: "17cm型（大）980円",
        description: "シンプルな豆乳しふぉん。卵の黄身を使わず、卵白（メレンゲ）だけで仕上げた、メイドイン北海道産のしふぉんケーキです。コレステロールゼロのヘルシースイーツ店です。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161122114510.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 45,
        shop_id: 47,
        name: "あわび最中",
        price: "1個145円",
        description: "当社自慢の十勝産小豆を使用したつぶあんと求肥の入ったあわびの形をした最中。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161122115944.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 46,
        shop_id: 48,
        name: "トマト羊羹",
        price: "864円",
        description: "北斗市産のトマトを100％使用した、ちょっぴりフルーティーな羊かんです。全国的にもめずらしいです。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180131024153.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 47,
        shop_id: 49,
        name: "獺祭",
        price: "330円",
        description: "人気の純米大吟醸「獺祭」のしぼりたて酒粕を使ったアイスクリーム。カップには獺祭のロゴが入り、蔵元や獺祭ストアでも販売されております。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161220043559.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 48,
        shop_id: 50,
        name: "ママシュー",
        price: "160円",
        description: "函館牛乳と北海道産生クリームを使って炊き上げた自家製カスタードです。口の中でとろけるクリームを満喫して下さい。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161122043036.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 49,
        shop_id: 51,
        name: "風の子大福",
        price: "150円",
        description: "八雲町産風の子餅米を使用し、餅には苺果汁を混ぜ色付けし、苺の香りと味が楽しめます。中には北斗市産「けんたろう苺」をまるごと1個が餡で包んで入っており、ジューシーでおいしい大福です。販売期間5月～7月上旬まで。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161130121255.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:51:59.000Z",
        updated_at: "2019-01-17T11:51:59.000Z"
    },
    {
        id: 50,
        shop_id: 52,
        name: "大福餅",
        price: "120～186円",
        description: "毎朝、杵でついた餅で作っております。中でも「いちご大福」(1月～6月下旬)、コーヒー風味の餡と生クリームが絶妙な「モカ大福」もおすすめです。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161130122956.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 51,
        shop_id: 53,
        name: "函館ラスク（全10種）",
        price: "432円",
        description: "本店自慢の食パンで作る一口ラスク。こだわりの各種フレーバーは、大人も楽しめる贅沢チョコレートや北海道らしい「赤肉メロン」、おつまみ系など、選ぶのも楽しい。小ぶりでPOPなデザインはプチギフトにも◎。※チョコレート3種のみ540円",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161206095858.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 52,
        shop_id: 54,
        name: "ショコラヴォヤージュ",
        price: "1,300円",
        description: "北海道産の生クリームをガナッシュで包み込んだ当店1番人気の生トリュフです。冷凍したままだとアイスの様にさっぱりと、冷蔵解凍するとふんわり、お好きなお召し上がり方でどうぞ！お持ち帰り、最大10時間まで保冷が可能です。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161206105206.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 53,
        shop_id: 55,
        name: "キャラメルナッツシルク",
        price: "378円",
        description: "シルクメニュー人気No.1！",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161206112732.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 54,
        shop_id: 56,
        name: "珈琲焼菓子（15枚入り）",
        price: "700円",
        description: "老舗珈琲店、美鈴コーヒーの珈琲焼菓子を作りました。あたたかく懐かしい味をどうぞご賞味ください。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161228022203.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 55,
        shop_id: 57,
        name: "古代もち",
        price: "320円",
        description: "道南、福島町産の黒米「北のむらさき」使用の餅菓子です。体に必要なカルシウムやビタミン群が多くカロリーが低いのも特徴です。焦がし黄な粉をまぶしてあり、味にはコクが、香りには深みがあります。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161222094432.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 56,
        shop_id: 58,
        name: "大沼だんご",
        price: "小折390円",
        description: "折で大沼湖・小沼湖を表現し、団子を串に刺さないのは湖面に浮かぶ126の島々に見立てています。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161226115556.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 57,
        shop_id: 59,
        name: "黒豆ロール",
        price: "1本550円",
        description: "厚沢部特産の光黒大豆を8時間かけて炊いてコーヒー風味のしっとりスポンジとバタークリームで仕上げたロールケーキです。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180131040448.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 58,
        shop_id: 60,
        name: "ホタテカレーパン",
        price: "335円",
        description: "噴火湾産のホタテを贅沢に使ったカレーパン。スパイシーなルーとサクッとしたパン生地がクセになる美味しさ。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161220040836.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 59,
        shop_id: 61,
        name: "たま福来枝豆甘納豆",
        price: "864円",
        description: "タマフクラ大豆の枝豆を手作業で莢から一粒づつ豆を取り出し枝豆の食感と風味を残す為、他の甘納豆より少し硬めですがご賞味いただければ他では、味わえない「納得、満足」を感じていただけると思います。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161220042306.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 60,
        shop_id: 62,
        name: "ソフトクリーム各種",
        price: "300円",
        description: "新鮮な牛乳と卵をたっぷり使用した無添加のソフトクリームは牛乳メーカーならではの味。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161221104907.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 61,
        shop_id: 63,
        name: "七飯アップルチョコレート",
        price: "216円",
        description: "日本で初めて西洋リンゴの栽培が行われた地、七飯町。その七飯のリンゴがたっぷりと入ったかわいいお菓子です。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161227104721.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 62,
        shop_id: 64,
        name: "土方歳三",
        price: "135円",
        description: "試衛館で近藤勇・沖田総司と稽古に打ち込んでいたことを思い、鍔型のお菓子を創りました。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161227110540.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 63,
        shop_id: 65,
        name: "チョコクグロフ",
        price: "1,350円",
        description: "くるみ入りのマーブルケーキにチョコレートをかけたお菓子です。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20161227120502.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 64,
        shop_id: 66,
        name: "道産小麦食パン（春よ恋100%）",
        price: "900円",
        description: "なし",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/dummy.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 65,
        shop_id: 67,
        name: "新幹線カラー3色ルーレ",
        price: "1,080円",
        description: "新幹線カラーをイメージしたホワイト（チーズ）グリーン（抹茶）パープル（ブルーベリー）の3色をセットした限定商品。冷凍タイプもあるので土産や地方発送も可。（再冷凍可）",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20170104121612.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 66,
        shop_id: 68,
        name: "100円シュークリーム",
        price: "100円",
        description: "クリームは基本を守り、良い素材を使用し丁寧に、真面目に…。発売以来試行錯誤を重ね、誰からも「美味しい!!」と誉めていただける商品にたどり着きました。当店自慢の１品です！ぜひご賞味ください!!",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20170111113205.png",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 67,
        shop_id: 69,
        name: "レーヴロールプレーン、レーヴロールチョコレート",
        price: "プレーン1,080円",
        description: "プレーンロールはふわふわ生地のこだわりロールケーキです。クリームにメープルシロップを使用しています。チョコロールは生チョコクリームをふわりと軽い生地で巻きました。どちらもとても食べやすいロールケーキです。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20170106103451.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 68,
        shop_id: 70,
        name: "由蔵ロール",
        price: "1,728円",
        description: "ビターな蜂蜜の甘さと、ふくよかなコクのクリームが調和する江差町の新スイーツ。地元の素材にとことんこだわり、創業者「浅野由蔵」の名を持つ浅野屋渾身のロールケーキをご堪能下さい。",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20170116035540.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 69,
        shop_id: 71,
        name: "バナナチョコシルク",
        price: "421円",
        description: "ご当地バーガーで有名なラッキーピエロ。ハンバーガーだけでなくソフトクリームも名物バナナ好きに大人気。濃厚なソフトクリームをバナナとチョコソースとナッツで食べる！",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180306033351.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 70,
        shop_id: 72,
        name: "コーヒーゼリーシルク",
        price: "410円",
        description: "ご当地バーガーで有名なラッキーピエロ。ハンバーガーだけでなくソフトクリームも名物。コーヒーゼリー好きに大人気、濃厚なソフトクリームとコーヒーゼリーで食べる！",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180306033311.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 71,
        shop_id: 73,
        name: "野いちごシルク",
        price: "486円",
        description: "ご当地バーガーで有名なラッキーピエロ。ハンバーガーだけでなくソフトクリームも名物。いちご好きに大人気。濃厚ソフトクリームと野いちごソースで食べる！",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180306033218.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 72,
        shop_id: 74,
        name: "ブルーベリーレアチーズシルク",
        price: "432円",
        description: "ご当地バーガーで有名なラッキーピエロ。ハンバーガーだけでなくソフトクリームも名物。ブルーベリー好きに大人気。濃厚ソフトクリームをブルーベリーソースとレアチーズで食べる！",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180306033156.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 73,
        shop_id: 75,
        name: "チョコレートパフェ",
        price: "410円",
        description: "ご当地バーガーで有名なラッキーピエロ。ハンバーガーだけでなくソフトクリームも名物。チョコ好きに大人気、濃厚ソフトクリームをチョコソースとナッツで食べる！",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180308104259.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 74,
        shop_id: 76,
        name: "シルクバニラソフト",
        price: "270円",
        description: "ご当地バーガーで有名なラッキーピエロ。ハンバーガーだけでなくソフトクリームも名物。濃厚なバニラソフト大人気！",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180306033029.gif",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 75,
        shop_id: 77,
        name: "シルクチョコソフト",
        price: "270円",
        description: "ご当地バーガーで有名なラッキーピエロ。ハンバーガーだけでなくソフトクリームも名物。濃厚なチョコソフト大人気！",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180306033006.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 76,
        shop_id: 78,
        name: "シルクミックスソフト",
        price: "270円",
        description: "ご当地バーガーで有名なラッキーピエロ。ハンバーガーだけでなくソフトクリームも名物。濃厚なミックスソフト大人気！",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180306032912.gif",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 77,
        shop_id: 79,
        name: "キャラメルナッツシルク",
        price: "410円",
        description: "ご当地バーガーで有名なラッキーピエロ。ハンバーガーだけでなくソフトクリームも名物。キャラメル好きに大人気。濃厚なソフトクリームをキャラメルソースとナッツで食べる！",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180306032748.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 78,
        shop_id: 80,
        name: "バナナチョコシルク",
        price: "421円",
        description: "ご当地バーガーで有名なラッキーピエロ。ハンバーガーだけでなくソフトクリームも名物。バナナ好きに大人気。濃厚なソフトクリームをバナナとチョコソースとナッツで食べる！",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180306032704.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 79,
        shop_id: 81,
        name: "コーヒーゼリーシルク",
        price: "410円",
        description: "ご当地バーガーで有名なラッキーピエロ。ハンバーガーだけでなくソフトクリームも名物。コーヒーゼリー好きに大人気。濃厚なソフトクリームとコーヒーゼリーで食べる！",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180306032515.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    },
    {
        id: 80,
        shop_id: 82,
        name: "野いちごシルク",
        price: "486円",
        description: "ご当地バーガーで有名なラッキーピエロ。ハンバーガーだけでなくソフトクリームも名物。いちご好きに大人気。濃厚ソフトクリームと野いちごソースで食べる！",
        imagePath: "http://www.hakodate-sweets.com/pgm/img/main02-20180306032307.jpg",
        small_category_id: 14,
        created_at: "2019-01-17T11:52:00.000Z",
        updated_at: "2019-01-17T11:52:00.000Z"
    }
];
export default sweetsSampleResponse;