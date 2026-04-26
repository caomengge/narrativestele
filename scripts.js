const SCRIPTS_DATA = {
  "en": {
    "menuTitle": "Select a Witness",
    "LS": {
      "name": "Laurence Sickman",
      "portrait": "images/Laurence Sickman_史克门.jpg",
      "startBtn": "Interact with the Stele",
      "continueBtn": "Continue",
      "nextSteleBtn": "Go to Liu Dunzhen’s Stele",
      "steps": {
        "0": {
          "text": "Good day. You seem to have come from afar. What brings you here today?",
          "choices": [
            {
              "label": "I am here to see an exhibition.",
              "next": "3a"
            },
            {
              "label": "I am seeking pathways to wisdom.",
              "next": "3b"
            }
          ]
        },
        "4": {
          "text": "Have you seen our Chinese Temple Room Gallery?",
          "image": "images/Image_1.1.jpg",
          "choices": [
            {
              "label": "This is my first time seeing it.",
              "next": 6
            },
            {
              "label": "Yes, I have been there before.",
              "next": 6
            }
          ]
        },
        "6": {
          "text": "That gallery occupies a special place in my heart. The mural came from Guangsheng Temple in Shanxi. The coffered ceiling above came from Zhihua Temple in Beijing.",
          "image": "images/Image_1.1.jpg",
          "next": 7
        },
        "7": {
          "text": "I brought them to Kansas City in the 1930s.",
          "next": 8
        },
        "8": {
          "text": "At the time, I had only just finished my training as an art historian. A Harvard–Yenching Fellowship allowed me to live in Beijing and continue my study of Chinese art.",
          "next": 9
        },
        "9": {
          "text": "It was then that my former teacher, Langdon Warner, wrote to me.",
          "next": 10
        },
        "10": {
          "text": "He showed me this photograph taken at Zhihua Temple, a Ming-dynasty Buddhist monastery not far from where I lived.",
          "image": "images/image_1.2.jpg",
          "next": 11
        },
        "11": {
          "text": "It was said that, to raise funds for repairs, the monks had already taken down the coffered ceiling and entrusted antique dealers with finding a buyer.",
          "image": "images/image_1.2.jpg",
          "next": 12
        },
        "12": {
          "text": "Warner believed it would be an ideal acquisition for a new museum then under construction in Kansas City.",
          "image": "images/image_1.2.jpg",
          "next": 13
        },
        "13": {
          "text": "So I asked everywhere about the ceiling’s whereabouts: visiting antique shops in Liulichang, seeking introductions, holding long conversations with dealers, and, inevitably, drinking a great deal of tea.",
          "image": "images/image_1.2.jpg",
          "next": 14
        },
        "14": {
          "text": "At last, the trail led to a modest courtyard near a coffin shop. There, in front of the displaced ceiling, I negotiated the price and made an agreement.",
          "image": "images/Image_1.3.jpg",
          "choices": [
            {
              "label": "This ceiling belonged to Zhihua Temple. If you took it away, didn’t you leave the building “incomplete”?",
              "next": "16a"
            },
            {
              "label": "But if it was left to be scattered and damaged, maybe a museum was the safest place for it.",
              "next": "16b"
            }
          ]
        },
        "17": {
          "text": "Later, I read the survey report on Zhihua Temple by the architectural historian Liu Dunzhen. So I went there myself, hoping to see with my own eyes where the ceiling had originally been.",
          "next": 18
        },
        "18": {
          "text": "I will never forget the room where the ceiling once belonged: walls covered with thousands of small seated Buddhas, like the stars in the cosmos.",
          "image": "images/Image_1.4.jpg",
          "next": 19
        },
        "19": {
          "text": "Years have passed, and yet in my dreams I keep returning to that room, as if I never truly left.",
          "image": "images/Image_1.4.jpg",
          "next": 20
        },
        "20": {
          "text": "Thank you for listening to these old stories. If one day you are able to enter Zhihua Temple, perhaps you will see what I was unable to see clearly back then.",
          "image": "images/Image_1.4.jpg",
          "next": "end"
        },
        "3a": {
          "text": "Then we meet on familiar ground. For many years I served as a curator at the Nelson-Atkins Museum of Art.",
          "next": 4
        },
        "3b": {
          "text": "Interesting… You may help me with a question. For many years I served as a curator at the Nelson-Atkins Museum of Art.",
          "next": 4
        },
        "16a": {
          "text": "(Sighing) My purchase did separate the ceiling from the building. But in those turbulent years, had it been left to scatter and decay, a museum may have been the safest refuge I could imagine.",
          "image": "images/Image_1.3.jpg",
          "next": 17
        },
        "16b": {
          "text": "(Sighing) Perhaps so. The museum did preserve it. But preservation does not undo separation. The ceiling was still removed from the building to which it once belonged.",
          "image": "images/Image_1.3.jpg",
          "next": 17
        }
      }
    },
    "LD": {
      "name": "Liu Dunzhen",
      "portrait": "images/LiuDunzhen_Portrait.jpg",
      "startBtn": "Interact with the Narrative Stele",
      "continueBtn": "Continue",
      "nextSteleBtn": "Go to Shen Tingfang's Stele",
      "steps": {
        "0": {
          "text": "You look a bit puzzled—can I help?",
          "choices": [
            {
              "label": "I want to know how to get to Zhihua Temple.",
              "next": "3a"
            },
            {
              "label": "I want to hear a story that is fragmented yet connected.",
              "next": "3b"
            }
          ]
        },
        "4": {
          "text": "Visitor: (inner thought) Wasn’t I just visiting an exhibition? How did I end up at Zhihua Temple?",
          "next": 5
        },
        "5": {
          "text": "Recently, more and more people have been coming to Zhihua Temple. I have heard that among them is a young American named Laurence Sickman.",
          "next": 6
        },
        "6": {
          "text": "He had a keen eye for Chinese art, and he also asked me a few questions about ancient architecture.",
          "choices": [
            {
              "label": "Could you be Professor Liu Dunzhen?",
              "next": "8a"
            },
            {
              "label": "I have also had the chance to meet Sickman.",
              "next": "8b"
            }
          ]
        },
        "9": {
          "text": "Zhihua Temple is among Beiping’s earlier surviving official-style timber buildings. More remarkably, its architecture gives form to Buddhist visions of the cosmos and the Pure Land.",
          "next": 10
        },
        "10": {
          "text": "Take this two-story building for example.",
          "image": "images/image_2.1.JPG",
          "next": 11
        },
        "11": {
          "text": "Its first level, Rulai Hall, enshrines Śākyamuni Buddha and Buddhist scriptures, symbolizing the wisdom of the Dharma accessible in this world.",
          "image": "images/image_2.2.jpg",
          "next": 12
        },
        "12": {
          "text": "Its second level, Wanfo Pavilion, enshrines the Buddhas of the Three Bodies. The central figure is Vairocana, who represents the Dharma as abstract truth, to be realized through understanding the scriptures.",
          "image": "images/image_2.3.JPG",
          "next": 13
        },
        "13": {
          "text": "Above Vairocana, there was originally a coffered ceiling carved with nine dragons and the Eight Auspicious Symbols of Tibetan Buddhism.",
          "image": "images/image_1.2.jpg",
          "next": 14
        },
        "14": {
          "text": "The scriptures below, the Dharma-body Buddha at the center, and the coffered ceiling above—together, they formed a complete space of faith.",
          "image": "images/image_2.4.jpg",
          "next": 15
        },
        "15": {
          "text": "Unfortunately, the coffered ceiling has been taken down, and I do not know where it has gone…",
          "image": "images/image_2.5.JPG",
          "choices": [
            {
              "label": "Tell Liu Dunzhen that the ceiling is at the Nelson-Atkins Museum of Art.",
              "next": 17
            },
            {
              "label": "Remain silent.",
              "next": 17
            }
          ]
        },
        "17": {
          "text": "(sighing deeply) These are turbulent times, and countless cultural artifacts have been dispersed overseas. Even a coffered ceiling—an element that once belonged to a building—could not escape being taken down and sold.",
          "next": 18
        },
        "18": {
          "text": "If Shen Tingfang had not submitted his memorial, perhaps Zhihua Temple would not have fallen into such decline.",
          "next": 19
        },
        "19": {
          "text": "We do not have much time left. Once the survey is complete, I hope to create an architectural model of Wanfo Pavilion for teaching and research.",
          "next": 20
        },
        "20": {
          "text": "I am glad we could look closely at this building together. Once the model is complete, we would welcome your suggestions.",
          "next": "end"
        },
        "3a": {
          "text": "(smiling) Sometimes it is harder to see the place we are already in. You are standing in Zhihua Temple right now.",
          "next": 4
        },
        "3b": {
          "text": "(smiling) Like the moon as it waxes and wanes, things may fragment and come together again. Here in Zhihua Temple, there is indeed such a story.",
          "next": 4
        },
        "8a": {
          "text": "Indeed, I am. I am honored that you recognize me. I have brought my students to Beiping to survey the remains of ancient architecture.",
          "next": 9
        },
        "8b": {
          "text": "What a coincidence. Then allow me to introduce myself. I am Liu Dunzhen. I have brought my students to Beiping to survey the remains of ancient architecture.",
          "next": 9
        }
      }
    },
    "ST": {
      "name": "Shen Tingfang",
      "portrait": "images/ShenTingfang_Portrait.jpg",
      "startBtn": "Interact with the Stele",
      "continueBtn": "Continue",
      "nextSteleBtn": "Go to Wang Zhen's Stele",
      "steps": {
        "0": {
          "text": "(reciting) Ten thousand folds of western hills embrace the imperial blue; gazing from the pavilion, clouds sink deep and dim. The vast sky and setting sun stretch beyond sight; before autumn arrives, geese have already reached the northern frontier.",
          "image": "images/image_3.1.jpg",
          "next": 2
        },
        "2": {
          "text": "Autumn in the capital is crisp and clear, just right for climbing high and gazing into the distance. What a pity there is no kindred spirit here to share the view.",
          "next": 3,
          "image": "images/image_3.1.jpg"
        },
        "3": {
          "text": "Visitor (inner thought): Who is reciting poetry? Perhaps I should answer with a poem I know.",
          "choices": [
            {
              "label": "Recite a poem by Su Shi.",
              "next": "5a"
            },
            {
              "label": "Recite a poem by Bai Juyi.",
              "next": "5b"
            }
          ]
        },
        "7": {
          "text": "Speaking of Hangzhou, I am from there as well. In my youth, I aspired to learning and especially loved poetry.",
          "next": 8
        },
        "8": {
          "text": "By imperial grace, I entered the Hanlin Academy to help compile the History of Ming, where I studied the rise and fall of rulers and ministers of the former dynasty.",
          "next": 9
        },
        "9": {
          "text": "I often visit historic sites in the capital—partly to enjoy the scenery, and partly to see what remains of earlier dynasties.",
          "next": 10
        },
        "10": {
          "text": "Visitor: May I ask, sir, have you ever been to Zhihua Temple?",
          "next": 11
        },
        "11": {
          "text": "(slightly surprised) Zhihua Temple? As it happens, I visited just a few days ago. The temple was bustling with incense offerings, and drums and music filled the air—it was quite lively.",
          "next": 12
        },
        "12": {
          "text": "(his tone darkens) But I did not expect to find a wooden effigy of Wang Zhen still enshrined there. The common people, unaware of the truth, were bowing to him in worship.",
          "next": 13
        },
        "13": {
          "text": "Wang Zhen’s offenses against the state are clearly recorded in history. So I submitted a memorial to the court, requesting that his image be removed from Zhihua Temple.",
          "next": 14
        },
        "14": {
          "text": "Visitor: My learning is shallow, and I know little of these past events. I would be grateful for your instruction.",
          "next": 15
        },
        "15": {
          "text": "Wang Zhen was a Ming-dynasty eunuch and a devout believer in Buddhism. He donated his own residence to build Zhihua Temple, where he also honored his ancestors.",
          "image": "images/image_3.3.jpg",
          "next": 16
        },
        "16": {
          "text": "He was deeply favored by the Yingzong Emperor, but later abused his power and brought harm to the state. In 1449, the Tumu Crisis broke out: the Ming army was defeated, the emperor was captured, and Wang Zhen died in the chaos.",
          "image": "images/image_3.3.jpg",
          "next": 17
        },
        "17": {
          "text": "When eunuchs seize power, disaster often follows. Yet people still worship Wang Zhen in the temple. If this is not corrected, how will later generations distinguish right from wrong?",
          "choices": [
            {
              "label": "Wang Zhen harmed the state and should indeed be condemned.",
              "next": "19a"
            },
            {
              "label": "But would this also affect Zhihua Temple itself?",
              "next": "19b"
            }
          ]
        },
        "20": {
          "text": "(sighing) Still, cause and consequence in history are not always easy to see clearly. As I grow older, I find myself drawn more to poetry than to politics.",
          "next": 21
        },
        "21": {
          "text": "Though we met by chance today, poetry has brought us together. I have copied several poems about Zhihua Temple by Ming-dynasty literati. Please accept them as a gift.",
          "next": "end"
        },
        "5a": {
          "text": "Visitor: By the sandy riverbank, lantern lights redden the hills; songs and drums resound amid laughter and bright talk. Tell me—does the young heart still remain? My cap sits askew, my sideburns tousled like windblown grass.",
          "image": "images/image_3.2.jpg",
          "next": "6a"
        },
        "5b": {
          "text": "Visitor: The Ocean-Gazing Tower shines in the morning glow; along the river embankment, white paths cross the clear sand. At night, the sound of waves reaches the Temple of Wu Yuan; in spring, willow green veils the home of Su Xiaoxiao.",
          "image": "images/image_3.2.jpg",
          "next": "6b"
        },
        "6a": {
          "text": "(clapping) Wonderful! These lines were written by Su Shi when he went to Hangzhou to serve as an examiner, inspired by climbing a tower and gazing into the distance.",
          "image": "images/image_3.2.jpg",
          "next": 7
        },
        "6b": {
          "text": "(clapping) Wonderful! These lines were written by Bai Juyi when he served as Governor of Hangzhou, inspired by climbing a tower and gazing into the distance.",
          "image": "images/image_3.2.jpg",
          "next": 7
        },
        "19a": {
          "text": "A person of insight can see the matter clearly. To take history as a mirror is a responsibility we all share.",
          "next": 20
        },
        "19b": {
          "text": "The temple itself is not at fault, but it will inevitably be affected.",
          "next": 20
        }
      }
    },
    "WZ": {
      "name": "Wang Zhen",
      "portrait": "images/WangZhen_Portrait.jpg",
      "startBtn": "Interact with the Stele",
      "continueBtn": "Continue",
      "restartBtn": "Restart Journey",
      "endNote": "Please, follow the marked lines on the floor. They will help you understand my intentions.",
      "steps": {
        "0": {
          "text": "(impatient) Enough, enough. How can you still be so unfamiliar with this “Middle Court Melody”?",
          "image": "images/image_4.1.jpg",
          "next": 2
        },
        "2": {
          "text": "These pieces I have taught you come from court ceremonial music. Not the slightest mistake can be tolerated.",
          "image": "images/image_4.1.jpg",
          "next": 3
        },
        "3": {
          "text": "Tomorrow, His Majesty will bestow upon this temple a set of Buddhist scriptures printed in the court.",
          "next": 4
        },
        "4": {
          "text": "During the ceremony of gratitude, you must not be as careless as you were today. Practice carefully. I will return in one hour to check your progress.",
          "next": 5
        },
        "5": {
          "text": "Visitor (inner thought): Court music and scriptures… Could this be Wang Zhen, the eunuch who founded Zhihua Temple?",
          "next": 6
        },
        "6": {
          "text": "Visitor: May I ask, has the Coffered Ceiling in Wanfo Pavilion been completed?",
          "next": 7
        },
        "7": {
          "text": "(surprised) I have never spoken to outsiders about the arrangements in Wanfo Pavilion. How did you learn of this ceiling?",
          "choices": [
            {
              "label": "I saw it in a dream.",
              "next": "9a"
            },
            {
              "label": "I heard about it while chatting with the artisans.",
              "next": "9b"
            }
          ]
        },
        "10": {
          "text": "(lowering his voice) Apart from the artisans and the two of us, no one else knows of this ceiling. Do not mention it to anyone again.",
          "next": 11
        },
        "11": {
          "text": "To others, it may be only a piece of woodwork. To me, it is bound up with causes and conditions. Do you believe that all things come into being through such connections?",
          "choices": [
            {
              "label": "I do.",
              "next": 13
            },
            {
              "label": "I do not quite understand.",
              "next": 13
            }
          ]
        },
        "13": {
          "text": "“Cause” is the root from which all things arise. “Condition” is what helps them come into being. Everything in this world is born when causes and conditions come together, and disperses when those conditions come to an end.",
          "next": 14
        },
        "14": {
          "text": "I was born into humble circumstances and entered the palace as a eunuch in my youth to make a living. After earning the late emperor’s trust, I was ordered to attend the young crown prince.",
          "next": 15
        },
        "15": {
          "text": "I remained by the crown prince’s side day and night, until he ascended the throne at the age of seven. To repay that grace, I have guarded His Majesty ever since.",
          "next": 16
        },
        "16": {
          "text": "Some say I am overbearing and monopolize power, that I have driven away loyal ministers. I admit, in this arena of power, one must sometimes commit necessary evils to survive.",
          "next": 17
        },
        "17": {
          "text": "Everything I have today was bestowed by the imperial family. To protect His Majesty, I would give my life without hesitation.",
          "next": 18
        },
        "18": {
          "text": "In designing this ceiling, I placed a five-clawed dragon at the center. Around it are eight swimming dragons, and beyond them are the Eight Buddhist Treasures—like stars surrounding the moon, protecting the emperor.",
          "image": "images/image_4.2.jpg",
          "next": 19
        },
        "19": {
          "text": "When later generations see this ceiling, do you think they will understand my intentions?",
          "image": "images/image_4.2.jpg",
          "choices": [
            {
              "label": "I think they will first admire its beauty.",
              "next": "21a"
            },
            {
              "label": "I think they will first judge your merits and faults.",
              "next": "21b"
            }
          ]
        },
        "22": {
          "text": "Before anyone else notices, go to Wanfo Pavilion and see that ceiling for yourself. If you can understand even a little of it, then my intentions will not have been in vain.",
          "next": "end"
        },
        "9a": {
          "text": "(frowning) Monks should not tell lies. If you have time to dream, you would be better off practicing the music.",
          "next": 10
        },
        "9b": {
          "text": "(displeased) The work must be finished in only two months, and the artisans still have time to chat with you? If you have time to idle, you would be better off practicing the music.",
          "next": 10
        },
        "21a": {
          "text": "(sighing) Wood will one day decay, and colors will one day fade. Beauty is never meant to last.",
          "next": 22
        },
        "21b": {
          "text": "(sighing) A person’s life is rarely his own to command. Right and wrong, merit and fault—who can truly understand them?",
          "next": 22
        }
      }
    }
  },
  "zh": {
    "menuTitle": "選擇一位見證者",
    "LS": {
      "name": "史克門",
      "portrait": "images/Laurence Sickman_史克门.jpg",
      "startBtn": "與石碑互動",
      "continueBtn": "繼續",
      "nextSteleBtn": "前往劉敦楨石碑",
      "steps": {
        "0": {
          "text": "有失遠迎，什麼風把您吹來了？",
          "choices": [
            {
              "label": "我來看個展覽。",
              "next": "3a"
            },
            {
              "label": "我在尋找通往智慧之路。",
              "next": "3b"
            }
          ]
        },
        "4": {
          "text": "您去過我們美術館的中國廟宇展廳嗎？",
          "image": "images/Image_1.1.jpg",
          "choices": [
            {
              "label": "我第一次見。",
              "next": 6
            },
            {
              "label": "我去過那裡。",
              "next": 6
            }
          ]
        },
        "6": {
          "text": "這裡對我來說意義非凡。牆上的壁畫來自山西廣勝寺，頭頂上的藻井來自北京智化寺。",
          "image": "images/Image_1.1.jpg",
          "next": 7
        },
        "7": {
          "text": "是我在1930年代把它們帶到堪薩斯城的。",
          "next": 8
        },
        "8": {
          "text": "那時候我剛大學畢業，拿著哈佛-燕京學社的獎學金在北京繼續研究中國藝術。",
          "next": 9
        },
        "9": {
          "text": "有一天，我以前的老師蘭登·華爾納寫信給我。",
          "next": 10
        },
        "10": {
          "text": "信件裡附帶這張拍攝於智化寺的照片。智化寺是一座明代的佛寺，離我住的協和胡同不遠。",
          "image": "images/image_1.2.jpg",
          "next": 11
        },
        "11": {
          "text": "據說寺僧為籌措修繕經費，已將藻井拆下，交由古董商尋找買主。",
          "image": "images/image_1.2.jpg",
          "next": 12
        },
        "12": {
          "text": "華爾納說，堪薩斯城正在蓋一座新的博物館，這件藻井非常合適成為其收藏。",
          "image": "images/image_1.2.jpg",
          "next": 13
        },
        "13": {
          "text": "於是我到處打聽藻井的下落，頻繁光顧琉璃廠的古董店、請人介紹、在漫長的對話中喝了無數杯茶。",
          "image": "images/image_1.2.jpg",
          "next": 14
        },
        "14": {
          "text": "最後我找到一個小院子，隔壁還是棺材鋪。就在那個院子裡，藻井就擺在我眼前。我當場談好價錢，把事情定下來。",
          "image": "images/Image_1.3.jpg",
          "choices": [
            {
              "label": "這藻井原屬於智化寺。把它買走，不就是讓建築殘缺了嗎？",
              "next": "16a"
            },
            {
              "label": "若任藻井散落損毀，或許博物館才是它最安全的去處。",
              "next": "16b"
            }
          ]
        },
        "17": {
          "text": "後來，我讀到建築史學者劉敦楨對智化寺所作的測繪報告。於是我去了智化寺一趟，想親眼看看藻井原本所在的位置。",
          "next": 18
        },
        "18": {
          "text": "我永遠不會忘記萬佛閣裡的景象：牆上滿滿是數千尊小小的坐佛，像夜空裡的星星。",
          "image": "images/Image_1.4.jpg",
          "next": 19
        },
        "19": {
          "text": "這麼多年過去了，我還是常常夢見萬佛閣。好像我從來沒有真正離開過。",
          "image": "images/Image_1.4.jpg",
          "next": 20
        },
        "20": {
          "text": "謝謝您聽我講這些舊事。若有一天您能走進智化寺，或許會看見我當年未能看清的事。",
          "image": "images/Image_1.4.jpg",
          "next": "end"
        },
        "3a": {
          "text": "那我們算是有共同話題了。我曾在納爾遜·阿特金斯藝術博物館當了多年策展人。",
          "next": 4
        },
        "3b": {
          "text": "有趣……說不定您能回答一個困擾我多年的問題。我曾在納爾遜·阿特金斯藝術博物館當了多年策展人。",
          "next": 4
        },
        "16a": {
          "text": "（感嘆）收購藻井，確實造成它與建築的分離。在那樣動盪的年代，若任其散落損毀，或許保存在博物館，已是我當時能想到的最安全做法。",
          "image": "images/Image_1.3.jpg",
          "next": 17
        },
        "16b": {
          "text": "（感嘆）博物館確實讓它保存了下來。可是，它與原本建築的分離，始終是無法迴避的事實。",
          "image": "images/Image_1.3.jpg",
          "next": 17
        }
      }
    },
    "LD": {
      "name": "劉敦楨",
      "portrait": "images/LiuDunzhen_Portrait.jpg",
      "startBtn": "與敘事碑互動",
      "continueBtn": "繼續",
      "nextSteleBtn": "前往沈廷芳石碑",
      "steps": {
        "0": {
          "text": "您看起來有些疑惑，需要我幫忙嗎？",
          "choices": [
            {
              "label": "我想知道如何去往智化寺。",
              "next": "3a"
            },
            {
              "label": "我想了解關於離與合的故事。",
              "next": "3b"
            }
          ]
        },
        "4": {
          "text": "觀眾：（內心想法）我不是在看展覽嗎？怎麼會來到智化寺？",
          "next": 5
        },
        "5": {
          "text": "最近來智化寺的人越來越多。我還遇見一位美國來的年輕人，名叫史克門。",
          "next": 6
        },
        "6": {
          "text": "他對中國藝術頗有見解，也向我請教了一些關於古代建築的問題。",
          "choices": [
            {
              "label": "您莫非是劉敦楨教授？",
              "next": "8a"
            },
            {
              "label": "我與史克門也有一面之緣。",
              "next": "8b"
            }
          ]
        },
        "9": {
          "text": "智化寺是北平現存較早的官式木構建築。更難得的是，這座寺院巧妙地利用建築空間，呈現出佛教宇宙與淨土的想像。",
          "next": 10
        },
        "10": {
          "text": "以這座雙層建築為例。",
          "image": "images/image_2.1.JPG",
          "next": 11
        },
        "11": {
          "text": "第一層的如來殿裡，供奉主尊釋迦牟尼佛以及佛經，象徵著世間可以觸及的佛法智慧。",
          "image": "images/image_2.2.jpg",
          "next": 12
        },
        "12": {
          "text": "第二層的萬佛閣裡，供奉有三身佛。主尊為毗盧佛，代表佛法作為抽象真理的存在，需理解佛經才能體悟。",
          "image": "images/image_2.3.JPG",
          "next": 13
        },
        "13": {
          "text": "毗盧佛上方，原本有一座藻井。上面雕刻有九龍與藏傳佛教的八種吉祥物。",
          "image": "images/image_1.2.jpg",
          "next": 14
        },
        "14": {
          "text": "經藏在下、法身居中，藻井在上。整座建築因而形成一個完整的信仰空間。",
          "image": "images/image_2.4.jpg",
          "next": 15
        },
        "15": {
          "text": "可惜的是，藻井已被拆下，不知流落何方……",
          "image": "images/image_2.5.JPG",
          "choices": [
            {
              "label": "告訴劉敦楨藻井在納爾遜·阿特金斯藝術博物館。",
              "next": 17
            },
            {
              "label": "保持沉默。",
              "next": 17
            }
          ]
        },
        "17": {
          "text": "（長嘆）當下時局動盪，流散海外的文物多不勝數。連藻井這樣原本屬於建築的構件，也不免被拆下賣掉。",
          "next": 18
        },
        "18": {
          "text": "倘若當年沈廷芳沒有呈上那道奏摺，智化寺或許不會衰敗至此。",
          "next": 19
        },
        "19": {
          "text": "留給我們的時間不多了。完成測繪後，我想製作萬佛閣的建築模型，用於教學與研究。",
          "next": 20
        },
        "20": {
          "text": "很高興能與您一同細看這座建築。待模型完成後，也歡迎您給我們提些建議。",
          "next": "end"
        },
        "3a": {
          "text": "（微笑）不識廬山真面目，只緣身在此山中。您此刻正站在智化寺裡。",
          "next": 4
        },
        "3b": {
          "text": "（微笑）人有悲歡離合，月有陰晴圓缺。您此刻所在的智化寺裡確實有一個這樣的故事。",
          "next": 4
        },
        "8a": {
          "text": "正是在下。沒想到您能認出我。此次我帶著學生來到北平，考察古代建築遺存。",
          "next": 9
        },
        "8b": {
          "text": "真是湊巧。既然如此，請容我自我介紹一下。在下劉敦楨。此次我帶著學生來到北平，考察古代建築遺存。",
          "next": 9
        }
      }
    },
    "ST": {
      "name": "沈廷芳",
      "portrait": "images/ShenTingfang_Portrait.jpg",
      "startBtn": "與敘事碑互動",
      "continueBtn": "繼續",
      "nextSteleBtn": "前往王振石碑",
      "steps": {
        "0": {
          "text": "（吟誦）萬疊西山擁帝青，登樓一望雲冥冥。長空落日杳無際，塞雁先秋到薊庭。",
          "image": "images/image_3.1.jpg",
          "next": 2
        },
        "2": {
          "text": "京城秋高氣爽，最適合登樓遠眺。可惜沒有知己一同欣賞這景色。",
          "next": 3,
          "image": "images/image_3.1.jpg"
        },
        "3": {
          "text": "觀眾：（內心想法）這是誰在誦詩？或許我也該以詩相和。",
          "choices": [
            {
              "label": "背誦一首蘇軾的詩。",
              "next": "5a"
            },
            {
              "label": "背誦一首白居易的詩。",
              "next": "5b"
            }
          ]
        },
        "7": {
          "text": "說起來，我也是杭州人。年少時有志於學，尤愛詩賦。",
          "next": 8
        },
        "8": {
          "text": "承蒙皇恩，我曾入翰林院編纂《明史》，得以細讀前代君臣治亂、王朝興衰。",
          "next": 9
        },
        "9": {
          "text": "我也常常探訪京城古蹟。一來賞景散心，二來也想看看舊朝遺跡。",
          "next": 10
        },
        "10": {
          "text": "觀眾：請問先生，可曾去過智化寺？",
          "next": 11
        },
        "11": {
          "text": "（略感驚訝）智化寺？前幾日我正好去過。那裡香火興旺，鼓樂齊鳴，倒是熱鬧得很。",
          "next": 12
        },
        "12": {
          "text": "（語氣轉沉）只是我沒想到，寺內竟還供著王振的木像。百姓不明就裡，對他頂禮膜拜。",
          "next": 13
        },
        "13": {
          "text": "王振誤國之罪，史冊昭然。於是我上奏朝廷，請求清除智化寺內的王振像。",
          "next": 14
        },
        "14": {
          "text": "觀眾：晚輩才疏學淺，不太了解這些往事，願聽先生賜教。",
          "next": 15
        },
        "15": {
          "text": "王振本是明朝宦官，篤信佛教。他捐出自己的宅邸興建智化寺，也在寺中供奉祖先。",
          "image": "images/image_3.3.jpg",
          "next": 16
        },
        "16": {
          "text": "他深得明英宗寵信，後來卻專權誤國。明正統十四年，土木堡之變爆發，明軍潰敗，英宗被俘，王振也死於亂軍之中。",
          "image": "images/image_3.3.jpg",
          "next": 17
        },
        "17": {
          "text": "宦官專權，自古多為禍端。如今寺中仍有人祭拜王振，若不加以糾正，後人又如何明辨是非？",
          "choices": [
            {
              "label": "王振誤國，確實應當受到譴責。",
              "next": "19a"
            },
            {
              "label": "可是這樣做，會不會也影響到智化寺本身？",
              "next": "19b"
            }
          ]
        },
        "20": {
          "text": "（嘆息）只是歷史中的因果，未必總能看得分明。年歲漸長，我反而更願將心力寄於詩文之中。",
          "next": 21
        },
        "21": {
          "text": "今日與您萍水相逢，卻因詩結緣。我曾抄錄幾首明代文人題詠智化寺的詩作，請您收下，權作一份薄禮。",
          "next": "end"
        },
        "5a": {
          "text": "觀眾：沙河燈火照山紅，歌鼓喧喧笑語中。為問少年心在否，角巾欹側鬢如蓬。",
          "image": "images/image_3.2.jpg",
          "next": "6a"
        },
        "5b": {
          "text": "觀眾：望海樓明照曙霞，護江堤白蹋晴沙。濤聲夜入伍員廟，柳色春藏蘇小家。",
          "image": "images/image_3.2.jpg",
          "next": "6b"
        },
        "6a": {
          "text": "（拍手）妙啊！這是蘇東坡赴杭州擔任監試時，登樓遠望有感而作。",
          "image": "images/image_3.2.jpg",
          "next": 7
        },
        "6b": {
          "text": "（拍手）妙啊！這是白樂天任杭州刺史時，登樓遠望有感而作。",
          "image": "images/image_3.2.jpg",
          "next": 7
        },
        "19a": {
          "text": "有識之士，所見略同。以史為鑑，正是我輩之責。",
          "next": 20
        },
        "19b": {
          "text": "寺廟本身並無過錯，但難免受到牽連。",
          "next": 20
        }
      }
    },
    "WZ": {
      "name": "王振",
      "portrait": "images/WangZhen_Portrait.jpg",
      "startBtn": "與石碑互動",
      "continueBtn": "繼續",
      "restartBtn": "重啟旅程",
      "endNote": "請沿著地上的標線走，它會幫您理解我的心意。",
      "steps": {
        "0": {
          "text": "（不耐煩）罷了罷了，這首《中堂曲》，怎麼現在還如此生疏？",
          "image": "images/image_4.1.jpg",
          "next": 2
        },
        "2": {
          "text": "我教給你們的這些曲目，源自宮廷雅樂，半點差錯也容不得。",
          "image": "images/image_4.1.jpg",
          "next": 3
        },
        "3": {
          "text": "明日，聖上將賜予本寺宮中刊印的佛經。",
          "next": 4
        },
        "4": {
          "text": "到時謝恩演奏，萬不可像今日這般馬虎。你們仔細練習，一個時辰後我再來檢查。",
          "next": 5
        },
        "5": {
          "text": "觀眾：（內心想法）宮廷雅樂、御賜經書……莫非此人就是創建智化寺的宦官王振？",
          "next": 6
        },
        "6": {
          "text": "觀眾：請公公留步。敢問萬佛閣中的九龍藻井，可已完工？",
          "next": 7
        },
        "7": {
          "text": "（驚訝）萬佛閣內的陳設，我從未對外人提起。你是從何得知這座藻井的？",
          "choices": [
            {
              "label": "我在夢中見過萬佛閣。",
              "next": "9a"
            },
            {
              "label": "我與工匠閒談時偶然得知。",
              "next": "9b"
            }
          ]
        },
        "10": {
          "text": "（壓低聲音）這座藻井，除了工匠之外，便只有你與我知曉。切莫再與他人提起。",
          "next": 11
        },
        "11": {
          "text": "對旁人來說，這或許只是一件木作；對我而言，卻關係著一段重要的因緣。你相信因緣嗎？",
          "choices": [
            {
              "label": "我相信。",
              "next": 13
            },
            {
              "label": "我不太明白。",
              "next": 13
            }
          ]
        },
        "13": {
          "text": "「因」是萬事生起的根本，「緣」是促成其成就的條件。世間萬物，無不因緣和合而生，緣盡則散。",
          "next": 14
        },
        "14": {
          "text": "我出身寒微，年少時為求生計入宮為宦。後來承蒙先皇信任，侍奉年幼的太子。",
          "next": 15
        },
        "15": {
          "text": "我與太子朝夕相伴，直到他七歲登基。為報知遇之恩，我自此日夜守護在皇上身邊。",
          "next": 16
        },
        "16": {
          "text": "有人說我專權跋扈，排擠忠良。我承認，在這權力場上，為求自保，難免要行必要之惡。",
          "next": 17
        },
        "17": {
          "text": "我今日所有，皆為皇家所賜。為護皇上周全，縱使肝腦塗地，也在所不惜。",
          "next": 18
        },
        "18": {
          "text": "我設計這座藻井時，以五爪金龍居中，四周環繞八條遊龍，外圍再飾以佛教八寶，寓意眾星拱月，護佑皇上。",
          "image": "images/image_4.2.jpg",
          "next": 19
        },
        "19": {
          "text": "你覺得後人看見這座藻井時，會明白我的心意嗎？",
          "image": "images/image_4.2.jpg",
          "choices": [
            {
              "label": "我想後人會先欣賞它的美。",
              "next": "21a"
            },
            {
              "label": "我想後人會先評判你的是非功過。",
              "next": "21b"
            }
          ]
        },
        "22": {
          "text": "趁旁人尚未察覺，你去萬佛閣看看那座藻井吧。若你能看懂其中一二，我這番心意，也算沒有白費。",
          "next": "end"
        },
        "9a": {
          "text": "（皺眉）出家人不打誑語。若有閒工夫做夢，不如多練練曲子。",
          "next": 10
        },
        "9b": {
          "text": "（不悅）工期不過兩個月，工匠竟還有空與你閒談？若有工夫偷懶，不如多練練曲子。",
          "next": 10
        },
        "21a": {
          "text": "（嘆息）木有朽時，彩有褪日，美好終究難以長存。",
          "next": 22
        },
        "21b": {
          "text": "（嘆息）人活一世，身不由己。是非功過，又有幾人能真正明白？",
          "next": 22
        }
      }
    }
  },
  "sc": {
    "menuTitle": "选择一位见证者",
    "LS": {
      "name": "史克门",
      "portrait": "images/Laurence Sickman_史克门.jpg",
      "startBtn": "与石碑互动",
      "continueBtn": "继续",
      "nextSteleBtn": "前往刘敦桢石碑",
      "steps": {
        "0": {
          "text": "有失远迎，什么风把您吹来了？",
          "choices": [
            {
              "label": "我来看个展览。",
              "next": "3a"
            },
            {
              "label": "我在寻找通往智慧之路。",
              "next": "3b"
            }
          ]
        },
        "4": {
          "text": "您去过我们的中国庙宇展厅吗？",
          "image": "images/Image_1.1.jpg",
          "choices": [
            {
              "label": "我第一次见。",
              "next": 6
            },
            {
              "label": "我去过那里。",
              "next": 6
            }
          ]
        },
        "6": {
          "text": "这里对我来说意义非凡。墙上的壁画来自山西广胜寺，头顶上的藻井来自北京智化寺。",
          "image": "images/Image_1.1.jpg",
          "next": 7
        },
        "7": {
          "text": "是我在1930年代把它们带到堪萨斯城的。",
          "next": 8
        },
        "8": {
          "text": "那时候我刚大学毕业，拿着哈佛-燕京学社的奖学金在北京继续研究中国艺术。",
          "next": 9
        },
        "9": {
          "text": "有一天，我以前的老师兰登·华尔纳写信给我。",
          "next": 10
        },
        "10": {
          "text": "信件里附带这张拍摄于智化寺的照片。智化寺是一座明代的佛寺，离我住的协和胡同不远。",
          "image": "images/image_1.2.jpg",
          "next": 11
        },
        "11": {
          "text": "据说寺僧为筹措修缮经费，已将藻井拆下，交由古董商寻找买主。",
          "image": "images/image_1.2.jpg",
          "next": 12
        },
        "12": {
          "text": "华尔纳说，堪萨斯城正在盖一座新的博物馆，这件藻井非常合适成为其收藏。",
          "image": "images/image_1.2.jpg",
          "next": 13
        },
        "13": {
          "text": "于是我到处打听藻井的下落，频繁光顾琉璃厂的古董店、请人介绍、在漫长的对话中喝了无数杯茶。",
          "image": "images/image_1.2.jpg",
          "next": 14
        },
        "14": {
          "text": "最后我找到一个小院子，隔壁还是棺材铺。就在那个院子里，藻井就摆在我眼前。我当场谈好价钱，把事情定下来。",
          "image": "images/Image_1.3.jpg",
          "choices": [
            {
              "label": "这藻井原属于智化寺。把它买走，不就是让建筑残缺了吗？",
              "next": "16a"
            },
            {
              "label": "若任藻井散落损毁，或许博物馆是它最安全的去处。",
              "next": "16b"
            }
          ]
        },
        "17": {
          "text": "后来，我读到建筑史学者刘敦桢对智化寺所作的测绘报告。于是我去了智化寺一趟，想亲眼看看藻井原本所在的位置。",
          "next": 18
        },
        "18": {
          "text": "我永远不会忘记万佛阁里的景象：墙上满满是数千尊小小的坐佛，像夜空里的星星。",
          "image": "images/Image_1.4.jpg",
          "next": 19
        },
        "19": {
          "text": "这么多年过去了，我还是常常梦见万佛阁。好像我从来没有真正离开过。",
          "image": "images/Image_1.4.jpg",
          "next": 20
        },
        "20": {
          "text": "谢谢您听我讲这些旧事。若有一天您能走进智化寺，或许会看见我当年未能看清的事。",
          "image": "images/Image_1.4.jpg",
          "next": "end"
        },
        "3a": {
          "text": "那我们算是有共同话题了。我曾在纳尔逊·阿特金斯艺术博物馆当了多年策展人。",
          "next": 4
        },
        "3b": {
          "text": "有趣……说不定您能回答一个困扰我多年的问题。我曾在纳尔逊·阿特金斯艺术博物馆当了多年策展人。",
          "next": 4
        },
        "16a": {
          "text": "（感叹）收购藻井，确实造成了它与建筑的分离。在那样动荡的年代，若任其散落损毁，或许保存在博物馆，已是我当时能想到的最安全做法。",
          "image": "images/Image_1.3.jpg",
          "next": 17
        },
        "16b": {
          "text": "（感叹）博物馆确实让它保存了下来。可是，它与原本建筑的分离，始终是无法回避的事实。",
          "image": "images/Image_1.3.jpg",
          "next": 17
        }
      }
    },
    "LD": {
      "name": "刘敦桢",
      "portrait": "images/LiuDunzhen_Portrait.jpg",
      "startBtn": "与叙事碑互动",
      "continueBtn": "继续",
      "nextSteleBtn": "前往沈廷芳石碑",
      "steps": {
        "0": {
          "text": "您看起来有些疑惑，需要我帮忙吗？",
          "choices": [
            {
              "label": "我想知道如何去往智化寺。",
              "next": "3a"
            },
            {
              "label": "我想了解关于离与合的故事。",
              "next": "3b"
            }
          ]
        },
        "4": {
          "text": "观众：（内心想法）我不是在看展览吗？怎么会来到智化寺？",
          "next": 5
        },
        "5": {
          "text": "最近来智化寺的人越来越多。我还遇见一位从美国来的年轻人，名叫史克门。",
          "next": 6
        },
        "6": {
          "text": "他对中国艺术颇有见解，也向我请教了一些关于古代建筑的问题。",
          "choices": [
            {
              "label": "您莫非是刘敦桢教授？",
              "next": "8a"
            },
            {
              "label": "我与史克门也有一面之缘。",
              "next": "8b"
            }
          ]
        },
        "9": {
          "text": "智化寺是北平现存较早的官式木构建筑。更难得的是，这座寺院巧妙地利用建筑空间，呈现出佛教宇宙与净土的想象。",
          "next": 10
        },
        "10": {
          "text": "以这座双层建筑为例。",
          "image": "images/image_2.1.JPG",
          "next": 11
        },
        "11": {
          "text": "第一层的如来殿里，供奉主尊释迦牟尼佛以及佛经，象征着世间可以触及的佛法智慧。",
          "image": "images/image_2.2.jpg",
          "next": 12
        },
        "12": {
          "text": "第二层的万佛阁里，供奉有三身佛。主尊为毗卢佛，代表佛法作为抽象真理的存在，需理解佛经才能体悟。",
          "image": "images/image_2.3.JPG",
          "next": 13
        },
        "13": {
          "text": "毗卢佛上方，原本有一座藻井。上面雕刻有九龙与藏传佛教的八种吉祥物。",
          "image": "images/image_1.2.jpg",
          "next": 14
        },
        "14": {
          "text": "经藏在下、法身居中，藻井在上。整座建筑因而形成一个完整的信仰空间。",
          "image": "images/image_2.4.jpg",
          "next": 15
        },
        "15": {
          "text": "可惜的是，藻井已被拆下，不知流落何方……",
          "image": "images/image_2.5.JPG",
          "choices": [
            {
              "label": "告诉刘敦桢藻井在堪萨斯城的纳尔逊·阿特金斯艺术博物馆。",
              "next": 17
            },
            {
              "label": "保持沉默。",
              "next": 17
            }
          ]
        },
        "17": {
          "text": "（长叹）当下时局动荡，流散海外的文物多不胜数。连藻井这样原本属于建筑的构件，也不免被拆下卖掉。",
          "next": 18
        },
        "18": {
          "text": "倘若当年沈廷芳没有呈上那道奏折，智化寺或许不会衰败至此。",
          "next": 19
        },
        "19": {
          "text": "留给我们的时间不多了。完成测绘后，我想制作万佛阁的建筑模型，用于教学与研究。",
          "next": 20
        },
        "20": {
          "text": "很高兴能与您一同细看这座建筑。待模型完成后，也欢迎您给我们提些建议。",
          "next": "end"
        },
        "3a": {
          "text": "（微笑）不识庐山真面目，只缘身在此山中。您此刻正站在智化寺里。",
          "next": 4
        },
        "3b": {
          "text": "（微笑）人有悲欢离合，月有阴晴圆缺。您此刻所在的智化寺里确实有一个这样的故事。",
          "next": 4
        },
        "8a": {
          "text": "正是在下。没想到您能认出我。此次我带着学生来到北平，考察古代建筑遗存。",
          "next": 9
        },
        "8b": {
          "text": "真是凑巧。既然如此，请容我自我介绍一下。在下刘敦桢。此次我带着学生来到北平，考察古代建筑遗存。",
          "next": 9
        }
      }
    },
    "ST": {
      "name": "沈廷芳",
      "portrait": "images/ShenTingfang_Portrait.jpg",
      "startBtn": "与叙事碑互动",
      "continueBtn": "继续",
      "nextSteleBtn": "前往王振石碑",
      "steps": {
        "0": {
          "text": "（吟诵）万叠西山拥帝青，登楼一望云冥冥。长空落日杳无际，塞雁先秋到蓟庭。",
          "image": "images/image_3.1.jpg",
          "next": 2
        },
        "2": {
          "text": "京城秋高气爽，最适合登楼远眺。可惜没有知己一同欣赏这景色。",
          "next": 3,
          "image": "images/image_3.1.jpg"
        },
        "3": {
          "text": "观众：（内心想法）这是谁在诵诗？或许我也该以诗相和。",
          "choices": [
            {
              "label": "背诵一首苏轼的诗。",
              "next": "5a"
            },
            {
              "label": "背诵一首白居易的诗。",
              "next": "5b"
            }
          ]
        },
        "7": {
          "text": "说起来，我也是杭州人。年少时有志于学，尤爱诗赋。",
          "next": 8
        },
        "8": {
          "text": "承蒙皇恩，我曾入翰林院编纂《明史》，得以细读前代君臣治乱、王朝兴衰。",
          "next": 9
        },
        "9": {
          "text": "我也常常探访京城古迹。一来赏景散心，二来也想看看旧朝遗迹。",
          "next": 10
        },
        "10": {
          "text": "观众：请问先生，可曾去过智化寺？",
          "next": 11
        },
        "11": {
          "text": "（略感惊讶）智化寺？前几日我正好去过。那里香火兴旺，鼓乐齐鸣，倒是热闹得很。",
          "next": 12
        },
        "12": {
          "text": "（语气转沉）只是我没想到，寺内竟还供着王振的木像。百姓不明就里，对他顶礼膜拜。",
          "next": 13
        },
        "13": {
          "text": "王振误国之罪，史册昭然。于是我上奏朝廷，请求清除智化寺内的王振像。",
          "next": 14
        },
        "14": {
          "text": "观众：晚辈才疏学浅，不太了解这些往事，愿听先生赐教。",
          "next": 15
        },
        "15": {
          "text": "王振本是明朝宦官，笃信佛教。他捐出自己的宅邸兴建智化寺，也在寺中供奉祖先。",
          "image": "images/image_3.3.jpg",
          "next": 16
        },
        "16": {
          "text": "他深得明英宗宠信，后来却专权误国。明正统十四年，土木堡之变爆发，明军溃败，英宗被俘，王振也死于乱军之中。",
          "image": "images/image_3.3.jpg",
          "next": 17
        },
        "17": {
          "text": "宦官专权，自古多为祸端。如今寺中仍有人祭拜王振，若不加以纠正，后人又如何明辨是非？",
          "choices": [
            {
              "label": "王振误国，确实应当受到谴责。",
              "next": "19a"
            },
            {
              "label": "可是这样做，会不会也影响到智化寺本身？",
              "next": "19b"
            }
          ]
        },
        "20": {
          "text": "（叹息）只是历史中的因果，未必总能看得分明。年岁渐长，我反而更愿把心力寄于诗文之中。",
          "next": 21
        },
        "21": {
          "text": "今日与您萍水相逢，却因诗结缘。我曾抄录几首明代文人题咏智化寺的诗作，请您收下，权作一份薄礼。",
          "next": "end"
        },
        "5a": {
          "text": "观众：沙河灯火照山红，歌鼓喧喧笑语中。为问少年心在否，角巾欹侧鬓如蓬。",
          "image": "images/image_3.2.jpg",
          "next": "6a"
        },
        "5b": {
          "text": "观众：望海楼明照曙霞，护江堤白蹋晴沙。涛声夜入伍员庙，柳色春藏苏小家。",
          "image": "images/image_3.2.jpg",
          "next": "6b"
        },
        "6a": {
          "text": "（拍手）妙啊！这是苏东坡赴杭州担任监试时，登楼远望有感而作。",
          "image": "images/image_3.2.jpg",
          "next": 7
        },
        "6b": {
          "text": "（拍手）妙啊！这是白乐天任杭州刺史时，登楼远望有感而作。",
          "image": "images/image_3.2.jpg",
          "next": 7
        },
        "19a": {
          "text": "有识之士，所见略同。以史为鉴，正是我辈之责。",
          "next": 20
        },
        "19b": {
          "text": "寺庙本身并无过错，但难免受到牵连。",
          "next": 20
        }
      }
    },
    "WZ": {
      "name": "王振",
      "portrait": "images/WangZhen_Portrait.jpg",
      "startBtn": "与石碑互动",
      "continueBtn": "继续",
      "restartBtn": "重启旅程",
      "endNote": "请沿着地上的标线走，它会帮您理解我的心意。",
      "steps": {
        "0": {
          "text": "（不耐烦）罢了罢了，这首《中堂曲》，怎么现在还如此生疏？",
          "image": "images/image_4.1.jpg",
          "next": 2
        },
        "2": {
          "text": "我教给你们的这些曲目，源自宫廷雅乐，半点差错也容不得。",
          "image": "images/image_4.1.jpg",
          "next": 3
        },
        "3": {
          "text": "明日，圣上将赐予本寺宫中刊印的佛经。",
          "next": 4
        },
        "4": {
          "text": "到时谢恩演奏，万不可像今日这般马虎。你们仔细练习，一个时辰后我再来检查。",
          "next": 5
        },
        "5": {
          "text": "观众：（内心想法）宫廷雅乐、御赐经书……莫非此人就是创建智化寺的宦官王振？",
          "next": 6
        },
        "6": {
          "text": "观众：请公公留步。敢问万佛阁中的九龙藻井，可已完工？",
          "next": 7
        },
        "7": {
          "text": "（惊讶）万佛阁内的陈设，我从未对外人提起。你是从何得知这座藻井的？",
          "choices": [
            {
              "label": "我在梦中见过万佛阁。",
              "next": "9a"
            },
            {
              "label": "我与工匠闲谈时偶然得知。",
              "next": "9b"
            }
          ]
        },
        "10": {
          "text": "（压低声音）这座藻井，除了工匠之外，便只有你与我知晓。切莫再与他人提起。",
          "next": 11
        },
        "11": {
          "text": "对旁人来说，这或许只是一件木作；对我而言，却关系着一段重要的因缘。你相信因缘吗？",
          "choices": [
            {
              "label": "我相信。",
              "next": 13
            },
            {
              "label": "我不太明白。",
              "next": 13
            }
          ]
        },
        "13": {
          "text": "“因”是万事生起的根本，“缘”是促成其成就的条件。世间万物，无不因缘和合而生，缘尽则散。",
          "next": 14
        },
        "14": {
          "text": "我出身寒微，年少时为求生计入宫为宦。后来承蒙先皇信任，侍奉年幼的太子。",
          "next": 15
        },
        "15": {
          "text": "我与太子朝夕相伴，直到他七岁登基。为报知遇之恩，我自此日夜守护在皇上身边。",
          "next": 16
        },
        "16": {
          "text": "有人说我专权跋扈，排挤忠良。我承认，在这权力场上，为求自保，难免要行必要之恶。",
          "next": 17
        },
        "17": {
          "text": "我今日所有，皆为皇家所赐。为护皇上周全，纵使肝脑涂地，也在所不惜。",
          "next": 18
        },
        "18": {
          "text": "我设计这座藻井时，以五爪金龙居中，四周环绕八条游龙，外围再饰以佛教八宝，寓意众星拱月，护佑皇上。",
          "image": "images/image_4.2.jpg",
          "next": 19
        },
        "19": {
          "text": "你觉得后人看见这座藻井时，会明白我的心意吗？",
          "image": "images/image_4.2.jpg",
          "choices": [
            {
              "label": "我想后人会先欣赏它的美。",
              "next": "21a"
            },
            {
              "label": "我想后人会先评判你的是非功过。",
              "next": "21b"
            }
          ]
        },
        "22": {
          "text": "趁旁人尚未察觉，你去万佛阁看看那座藻井吧。若你能看懂其中一二，我这番心意，也算没有白费。",
          "next": "end"
        },
        "9a": {
          "text": "（皱眉）出家人不打诳语。若有闲工夫做梦，不如多练练曲子。",
          "next": 10
        },
        "9b": {
          "text": "（不悦）工期不过两个月，工匠竟还有空与你闲谈？若有工夫偷懒，不如多练练曲子。",
          "next": 10
        },
        "21a": {
          "text": "（叹息）木有朽时，彩有褪日，再美之物，终究难以长存。",
          "next": 22
        },
        "21b": {
          "text": "（叹息）人活一世，身不由己。是非功过，又有几人能真正明白？",
          "next": 22
        }
      }
    }
  }
};