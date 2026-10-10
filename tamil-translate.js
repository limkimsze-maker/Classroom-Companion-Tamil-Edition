(function(){
'use strict';
if(window.CCTamil)return;

const EXACT=new Map(Object.entries({
'Classroom Companion':'வகுப்பறை உதவியாளர்','Classroom Support':'வகுப்பறை ஆதரவு','Close':'மூடு','Main':'திரும்பு','Class':'வகுப்பு','Project':'திரையிடு','Exit':'வெளியேறு','Search':'தேடு','Undo':'மீட்டெடு','Reset':'மீட்டமை','Stop':'நிறுத்து','Pause':'இடைநிறுத்து','Resume':'தொடர்','Next':'அடுத்து','Start':'தொடங்கு','Ready!':'தயார்!','General':'பொது',

'Timer + Calm Music':'நேரக்காட்டி + அமைதியான இசை','Make time visible and predictable.':'நேரம் எவ்வளவு உள்ளது என்பதைத் தெளிவாகக் காட்டுங்கள்.','Focus time':'கவன நேரம்','See how much time is left. Work calmly, one step at a time.':'இன்னும் எவ்வளவு நேரம் உள்ளது என்று பாருங்கள். அமைதியாக, ஒரு படி ஒரு படியாகச் செயல்படுங்கள்.','♫ Calm music: On':'♫ அமைதியான இசை: இயக்கம்','♫ Calm music: Off':'♫ அமைதியான இசை: நிறுத்தம்','▶ Start':'▶ தொடங்கு','Ⅱ Pause':'Ⅱ இடைநிறுத்து','↺ Reset':'↺ மீட்டமை','Warm pads and soft bells fade in gently.':'மென்மையான இசையும் மணி ஒலியும் மெதுவாகத் தொடங்கும்.','Calm ambience fading in…':'அமைதியான இசை தொடங்குகிறது…','Warm pads • soft bells • gentle air texture':'மென்மையான இசை • மெது மணி • அமைதியான பின்னணி','Calm music is off.':'அமைதியான இசை நிறுத்தப்பட்டுள்ளது.','Tap Start again to enable sound.':'ஒலியை இயக்க “தொடங்கு” என்பதை மீண்டும் அழுத்தவும்.','Time is up':'நேரம் முடிந்தது!',

'Transition Countdown':'மாற்ற நேர பின்னோக்கி எண்ணிக்கை','Move safely and be ready.':'பாதுகாப்பாக நகர்ந்து தயாராக இருங்கள்.','Change activity':'செயல்பாட்டை மாற்றுங்கள்','Move safely • Be ready':'பாதுகாப்பாக நகருங்கள் • தயாராக இருங்கள்','Finish the transition before the countdown ends.':'பின்னோக்கி எண்ணிக்கை முடிவதற்கு முன் மாற்றத்தை முடிக்கவும்.','♫ Music: On':'♫ இசை: இயக்கம்','♫ Music: Off':'♫ இசை: நிறுத்தம்','▶ Start transition':'▶ மாற்றத்தைத் தொடங்கு','■ Stop':'■ நிறுத்து','Transition complete':'மாற்றம் முடிந்தது',

'Attention Signal':'கவன ஈர்ப்பு சைகை','A clear cue to stop, look and listen.':'நிறுத்தி, பார்த்து, கேட்க தெளிவான சைகை.','Attention cue':'கவன சைகை','Eyes here':'இங்கே பாருங்கள்','A short, predictable signal tells everyone when to stop, look and listen.':'சிறிய, அறிமுகமான சைகை அனைவருக்கும் எப்போது நிறுத்தி, பார்த்து, கேட்க வேண்டும் என்பதைச் சொல்கிறது.','🔔 Signal now':'🔔 இப்போது சைகை கொடு',

'Noise Level':'குரல் அளவு','Show pupils the voice level expected.':'மாணவர்கள் பயன்படுத்த வேண்டிய குரல் அளவைத் தெளிவாகக் காட்டுங்கள்.','Voice level':'குரல் அளவு','Silent':'அமைதி','No talking':'பேச வேண்டாம்','Whisper':'மெல்லிய குரல்','Only the person beside you can hear':'உங்களருகில் இருப்பவர் மட்டும் கேட்கும் அளவு','Partner':'இணை','Talk to your partner':'உங்கள் இணையுடன் மெதுவாகப் பேசுங்கள்','Group':'குழு','Your group can hear you':'உங்கள் குழுவினர் கேட்கும் அளவு','Presentation':'வழங்கல்','One voice for the whole class':'முழு வகுப்பிற்கும் ஒரு குரல் மட்டும்',

'Sentence Starters':'வாக்கியத் தொடக்கங்கள்','Simple ways to start an answer.':'பதிலைத் தொடங்க உதவும் எளிய வழிகள்.','Answer help':'பதில் உதவி','Choose a starter to help you begin your answer.':'உங்கள் பதிலைத் தொடங்க உதவும் ஒரு வாக்கியத் தொடக்கத்தைத் தேர்ந்தெடுக்கவும்.','I think ___ because ___.':'நான் ___ என்று நினைக்கிறேன், ஏனெனில் ___.','One reason is ___.':'ஒரு காரணம் ___.','For example, ___.':'உதாரணமாக, ___.','I know this because ___.':'இது எனக்குத் தெரியும், ஏனெனில் ___.','This means that ___.':'இதன் பொருள் ___.','I can tell that ___ because ___.':'___ என்று நான் சொல்ல முடிகிறது, ஏனெனில் ___.','So, ___.':'ஆகவே, ___.','So, ___. ':'ஆகவே, ___.',

'Confidence Check':'நம்பிக்கைச் சரிபார்ப்பு','A safe way for pupils to show how learning is going.':'தங்கள் கற்றல் நிலையை மாணவர்கள் பாதுகாப்பாகக் காட்டும் வழி.','How is learning going?':'உங்கள் கற்றல் எப்படி செல்கிறது?','Show 1–4 fingers':'1–4 விரல்கள் காட்டுங்கள்','Hold up the number of fingers that matches how you feel.':'உங்கள் கற்றல் உணர்வுக்கு ஏற்ப விரல்களின் எண்ணிக்கையை காட்டுங்கள்.','4 fingers maximum':'அதிகபட்சம் 4 விரல்கள்','I need help':'எனக்கு உதவி வேண்டும்','Please support me':'தயவுசெய்து உதவுங்கள்','I’m getting there':'நான் புரிந்துகொண்டு வருகிறேன்','I need more practice':'எனக்கு இன்னும் பயிற்சி வேண்டும்','I can do it':'என்னால் செய்ய முடியும்','I can try independently':'நான் தனியாக முயற்சி செய்ய முடியும்','I can explain it':'நான் விளக்க முடியும்','I can help someone else':'நான் மற்றவருக்கு உதவ முடியும்',

'Pick a Pupil':'மாணவரைத் தேர்ந்தெடு','Invite participation fairly from your class.':'வகுப்பில் அனைவருக்கும் நியாயமான வாய்ப்பளிக்கவும்.','Fair participation':'நியாயமான பங்கேற்பு','Ready to choose':'தேர்வு செய்யத் தயாராக உள்ளது','Everyone gets a fair chance. Pick without replacement until the round is complete.':'ஒவ்வொருவருக்கும் சம வாய்ப்பு கிடைக்கும். ஒரு சுற்று முடியும் வரை ஏற்கனவே தேர்ந்தெடுக்கப்பட்டவர் மீண்டும் தேர்ந்தெடுக்கப்படமாட்டார்.','🎯 Pick a pupil':'🎯 மாணவரைத் தேர்ந்தெடு','↺ New round':'↺ புதிய சுற்று','New round ready':'புதிய சுற்று தயாராக உள்ளது',

'Make Groups':'குழுக்கள் அமை','Create random groups quickly from the class list.':'வகுப்பு பட்டியலிலிருந்து விரைவாக சீரற்ற குழுக்கள் அமைக்கவும்.','Random grouping':'சீரற்ற குழுவாக்கம்','Make groups':'குழுக்கள் அமை','Names come from the class master sheet so the list stays consistent.':'பெயர்கள் வகுப்பு முதன்மைப் பட்டியலிலிருந்து எடுக்கப்படுகின்றன.','Group size':'குழு அளவு','👥 Make groups':'👥 குழுக்கள் அமை',

'Brain Break':'சிறு ஓய்வு','A short reset before learning continues.':'கற்றலைத் தொடரும் முன் ஒரு குறுகிய ஓய்வு.','⚡ Brain Break ⚡':'⚡ சிறு ஓய்வு ⚡','March & Move':'அதே இடத்தில் நடைபோடு','March quietly on the spot.':'அமைதியாக அதே இடத்தில் நடைபோடுங்கள்.','Reach for the Sky':'மேலே நீட்டுங்கள்','Reach both arms high, then relax. Keep moving!':'இரு கைகளையும் மேலே நீட்டி, பின்னர் தளர்த்துங்கள். தொடர்ந்து அசையுங்கள்!','Balance Challenge':'சமநிலை சவால்','Balance on one foot. Switch halfway through.':'ஒரு காலில் சமநிலையுடன் நிற்கவும். பாதியில் காலை மாற்றவும்.','Shoulder Roll':'தோள்களைச் சுழற்றுங்கள்','Roll your shoulders slowly and loosen up.':'தோள்களை மெதுவாகச் சுழற்றி உடலைத் தளர்த்துங்கள்.','Star Jump Energy':'ஸ்டார் ஜம்ப்','Do gentle star jumps with plenty of space.':'போதுமான இடைவெளியுடன் மெதுவாக ஸ்டார் ஜம்ப் செய்யுங்கள்.','Shake It Out':'அசைத்துத் தளருங்கள்','Shake your hands and arms, then your legs.':'கைகளையும் தோள்களையும், பின்னர் கால்களையும் அசையுங்கள்.','Figure 8':'8 வடிவம்','Trace a giant figure 8 in the air.':'காற்றில் பெரிய 8 வடிவத்தை வரையுங்கள்.','Touch Your Toes':'கால் விரல்களைத் தொடுங்கள்','Reach down toward your toes, then stand tall.':'கீழே குனிந்து கால் விரல்களை நோக்கி நீட்டுங்கள்; பின்னர் நேராக நிற்கவும்.','🏃 Sporty beat on':'🏃 உற்சாக தாளம்: இயக்கம்','🔇 Sporty beat off':'🔇 உற்சாக தாளம்: நிறுத்தம்','♫ Sound On':'♫ ஒலி: இயக்கம்','🔇 Sound Off':'🔇 ஒலி: நிறுத்தம்','🎲 Next':'🎲 அடுத்து','← Main':'← திரும்பு',

'Reflect':'கற்றல் சிந்தனை','Help pupils notice what supported their learning.':'தங்கள் கற்றலுக்கு உதவியவற்றை மாணவர்கள் கவனிக்க உதவுங்கள்.','Learning reflection':'கற்றல் சிந்தனை','Think quietly first. Then share, write or keep your answer in mind.':'முதலில் அமைதியாகச் சிந்தியுங்கள். பின்னர் பகிரலாம், எழுதலாம் அல்லது மனதில் வைத்துக்கொள்ளலாம்.','↻ Another prompt':'↻ மற்றொரு கேள்வி','What did you learn?':'நீங்கள் என்ன கற்றீர்கள்?','What was difficult?':'எது கடினமாக இருந்தது?','What helped you?':'எது உங்களுக்கு உதவியது?','What are you more confident about now?':'இப்போது எதில் அதிக நம்பிக்கை உள்ளது?','What strategy worked for you?':'எந்த உத்தி உங்களுக்கு உதவியது?','What will you try next time?':'அடுத்த முறை என்ன முயற்சி செய்வீர்கள்?',

'Quote of the Day':'இன்றைய ஊக்கவுரை','Encouragement for pupils who find learning difficult.':'கற்றல் சிரமமாக இருக்கும் மாணவர்களுக்கு ஊக்கம்.','✨ Today’s Encouraging Thought ✨':'✨ இன்றைய ஊக்கமளிக்கும் சிந்தனை ✨','One small step at a time. You can keep learning.':'ஒரு சிறிய படி வீதம் முன்னேறுங்கள். நீங்கள் தொடர்ந்து கற்கலாம்.','Preparing UK English voice…':'தமிழ் குரலைத் தயாரிக்கிறது…','🔊 Read Again':'🔊 மீண்டும் வாசி','⏸ Pause':'⏸ இடைநிறுத்து','⏹ Stop':'⏹ நிறுத்து','🎲 New Quote':'🎲 புதிய ஊக்கவுரை','Text-to-speech is not available in this browser.':'இந்த உலாவியில் உரை-ஒலி வசதி கிடைக்கவில்லை.','Tap Read Again if automatic speech was blocked.':'தானியங்கி வாசிப்பு தடுக்கப்பட்டால் “மீண்டும் வாசி” என்பதை அழுத்தவும்.',
'You do not have to understand everything at once. Learn one step at a time.':'எல்லாவற்றையும் ஒரே நேரத்தில் புரிந்துகொள்ள வேண்டியதில்லை. ஒரு படி ஒரு படியாகக் கற்றுக்கொள்ளுங்கள்.','Slow progress is still progress. Keep the next step small and clear.':'மெதுவான முன்னேற்றமும் முன்னேற்றமே. அடுத்த படியைச் சிறியதாகவும் தெளிவாகவும் வைத்துக்கொள்ளுங்கள்.','Not knowing yet is the beginning of learning.':'“இன்னும் தெரியவில்லை” என்பதே கற்றலின் தொடக்கம்.','A hard question is not a stop sign. Try a different strategy.':'கடினமான கேள்வி நிறுத்தச் சொல்லாது. வேறு ஒரு உத்தியை முயற்சி செய்யுங்கள்.','Your first answer does not need to be perfect. It only needs to get you started.':'முதல் பதில் சரியானதாக இருக்க வேண்டியதில்லை. அது உங்களைத் தொடங்கச் செய்தால் போதும்.','Mistakes show you what to work on next.':'தவறுகள் அடுத்ததாக என்ன பயிற்சி செய்ய வேண்டும் என்பதைச் சொல்கின்றன.','When one way does not work, change the way — not the goal.':'ஒரு வழி செயல்படாவிட்டால் வழியை மாற்றுங்கள்; இலக்கை அல்ல.','Ask for help when you need it. Strong learners do.':'தேவைப்படும் போது உதவி கேளுங்கள். நல்ல கற்றலாளர்கள் அப்படிச் செய்கிறார்கள்.','You can learn difficult things by breaking them into smaller parts.':'கடினமானவற்றைச் சிறிய பகுதிகளாகப் பிரித்தால் கற்றுக்கொள்ள முடியும்.','Today, aim to understand one thing better than yesterday.':'நேற்றைவிட இன்று ஒரு விஷயத்தைச் சிறப்பாகப் புரிந்துகொள்ள முயலுங்கள்.','Getting stuck does not mean you cannot learn it. It means you need a next move.':'சிக்கிக்கொள்வது நீங்கள் கற்க முடியாது என்பதல்ல; அடுத்த படி தேவை என்பதுதான்.','Try, check, change, and try again. That is learning.':'முயற்சி செய், சரிபார், மாற்று, மீண்டும் முயற்சி செய். அதுவே கற்றல்.','You are allowed to take your time. Keep thinking.':'நேரம் எடுத்துக் கொள்ளலாம். தொடர்ந்து சிந்தியுங்கள்.','One careful step is better than rushing through ten.':'பத்து படிகளை அவசரமாகச் செய்வதைவிட ஒரு படியை கவனமாகச் செய்வது மேல்.','If the work feels hard, choose one part you can do first.':'வேலை கடினமாகத் தோன்றினால், முதலில் செய்யக்கூடிய ஒரு பகுதியைத் தேர்ந்தெடுக்கவும்.','Every time you correct a mistake, your understanding gets stronger.':'ஒவ்வொரு தவறையும் திருத்தும் போது உங்கள் புரிதல் வலுப்படும்.','You do not need to be the fastest learner. You need to keep learning.':'நீங்கள் மிக வேகமாகக் கற்க வேண்டியதில்லை. தொடர்ந்து கற்றுக்கொண்டே இருக்க வேண்டும்.','A small success today can become confidence tomorrow.':'இன்றைய சிறிய வெற்றி நாளைய நம்பிக்கையாக மாறலாம்.','Say what you know first. Then work out what is missing.':'முதலில் உங்களுக்குத் தெரிந்ததைச் சொல்லுங்கள். பிறகு என்ன குறைவாக உள்ளது என்பதை கண்டறியுங்கள்.','When you feel unsure, use a strategy instead of giving up.':'நிச்சயமில்லாத போது கைவிடாமல் ஒரு உத்தியைப் பயன்படுத்துங்கள்.','Learning can feel difficult before it starts to feel familiar.':'பழகிப்போகும் முன் கற்றல் கடினமாகத் தோன்றலாம்.','Compare your work with your last attempt, not with someone else’s.':'உங்கள் வேலையை மற்றவர்களுடன் அல்ல, உங்கள் முந்தைய முயற்சியுடன் ஒப்பிடுங்கள்.','You can pause, think, and try again.':'நிறுத்தி, சிந்தித்து, மீண்டும் முயற்சி செய்யலாம்.','A question you ask today can unlock something tomorrow.':'இன்று நீங்கள் கேட்கும் ஒரு கேள்வி நாளை ஒரு புரிதலைத் திறக்கலாம்.','Keep the parts you understand and work on one confusing part at a time.':'உங்களுக்கு புரிந்த பகுதிகளை வைத்துக்கொண்டு, ஒவ்வொரு முறையும் ஒரு குழப்பமான பகுதியை மட்டும் சரிசெய்யுங்கள்.','Effort helps most when you also change your strategy.':'உங்கள் உத்தியையும் மாற்றும் போது முயற்சி அதிக பலன் தரும்.','You have learnt hard things before. Use the same patience again.':'முன்பும் கடினமானவற்றைக் கற்றுள்ளீர்கள். அதே பொறுமையை மீண்டும் பயன்படுத்துங்கள்.','Read it again. Draw it. Say it. Try another way.':'மீண்டும் வாசியுங்கள். வரைந்து பாருங்கள். சொல்லிப் பாருங்கள். வேறு வழியை முயற்சி செய்யுங்கள்.','Being confused is a signal to slow down and look for the next clue.':'குழப்பமாக இருந்தால் மெதுவாகி அடுத்த குறிப்பைக் கண்டுபிடிக்க வேண்டிய நேரம் அது.','You do not have to get it right immediately to get better at it.':'மேம்பட உடனே சரியாகச் செய்ய வேண்டியதில்லை.','Keep going until the next small step makes sense.':'அடுத்த சிறிய படி புரியும் வரை தொடர்ந்து முயற்சி செய்யுங்கள்.',

'Class Organisation':'வகுப்பு ஒழுங்கமைப்பு','One master pupil sheet → duty rosters, groups, roles, CCA and dismissal views':'ஒரே மாணவர் முதன்மைப் பட்டியல் → பொறுப்புகள், குழுக்கள், பங்குகள், CCA மற்றும் வீடு திரும்பும் ஏற்பாடுகள்','📋 Master Pupil Sheet':'📋 மாணவர் முதன்மைப் பட்டியல்','＋ Add pupil':'＋ மாணவர் சேர்க்க','↻ Sync class list':'↻ வகுப்பு பட்டியலை ஒத்திசை','⬆ Import CSV':'⬆ CSV இறக்குமதி','⬇ Download CSV':'⬇ CSV பதிவிறக்கு','Clear filters':'வடிகட்டிகளை அழி','Index No.':'வரிசை எண்','Pupil':'மாணவர்','Group':'குழு','Duty Day':'பொறுப்பு நாள்','Duty Responsibility':'பொறுப்பு வேலை','Class Role':'வகுப்பு பங்கு','Special Role':'சிறப்பு பங்கு','CCA':'CCA','Dismissal Mode':'வீடு திரும்பும் முறை','Dismissal Detail':'வீடு திரும்பும் விவரம்','All days':'அனைத்து நாட்கள்','All groups':'அனைத்து குழுக்கள்','All duties':'அனைத்து பொறுப்புகள்','All roles':'அனைத்து பங்குகள்','All CCAs':'அனைத்து CCA-கள்','All dismissal':'அனைத்து வீடு திரும்பும் முறைகள்','All responsibilities':'அனைத்து பொறுப்புகள்','All dismissal modes':'அனைத்து வீடு திரும்பும் முறைகள்','⬇ Filtered CSV':'⬇ வடிகட்டிய CSV','Duty Roster':'பொறுப்பு அட்டவணை','Groups':'குழுக்கள்','Roles':'பங்குகள்','Dismissal':'வீடு திரும்புதல்','All Pupils':'அனைத்து மாணவர்கள்','Organise by group':'குழுவின்படி ஒழுங்கமை','Individual pupils':'தனிப்பட்ட மாணவர்கள்',

'Daily Duty Roster':'தினசரி பொறுப்பு அட்டவணை','Everyone knows how to help the class today.':'இன்று வகுப்பிற்கு எப்படி உதவுவது என்பதை அனைவரும் அறிந்திருப்பார்கள்.','Edit duties':'பொறுப்புகளைத் திருத்து','Classroom responsibilities':'வகுப்பு பொறுப்புகள்','No duties assigned':'பொறுப்புகள் ஒதுக்கப்படவில்லை','Add Duty Day and Duty Responsibility in Class Organisation.':'வகுப்பு ஒழுங்கமைப்பில் பொறுப்பு நாள் மற்றும் பொறுப்பு வேலையைச் சேர்க்கவும்.','🗂️ Edit duties in Class Organisation':'🗂️ வகுப்பு ஒழுங்கமைப்பில் பொறுப்புகளைத் திருத்து',
'Monday':'திங்கள்','Tuesday':'செவ்வாய்','Wednesday':'புதன்','Thursday':'வியாழன்','Friday':'வெள்ளி','Mon':'தி','Tue':'செ','Wed':'பு','Thu':'வி','Fri':'வெ','Monday Duties':'திங்கள் பொறுப்புகள்','Tuesday Duties':'செவ்வாய் பொறுப்புகள்','Wednesday Duties':'புதன் பொறுப்புகள்','Thursday Duties':'வியாழன் பொறுப்புகள்','Friday Duties':'வெள்ளி பொறுப்புகள்','Weekend preview • Monday':'வார இறுதி முன்னோட்டம் • திங்கள்',

'Reward Points':'வெகுமதி புள்ளிகள்','Pupil Reward Points':'மாணவர் வெகுமதி புள்ளிகள்','Group Reward Points':'குழு வெகுமதி புள்ளிகள்','Recognise positive learning behaviours quickly.':'நல்ல கற்றல் நடத்தைகளை உடனே பாராட்டுங்கள்.','Positive reinforcement':'நேர்மறை ஊக்குவிப்பு','Tap a pupil, award points, and keep the momentum visible.':'மாணவரைத் தேர்ந்தெடுத்து புள்ளிகள் வழங்கி நல்ல முன்னேற்றத்தைத் தெளிவாகக் காட்டுங்கள்.','Reward teamwork and make positive group effort visible.':'குழு ஒத்துழைப்புக்கு வெகுமதி வழங்கி நல்ல குழு முயற்சியைத் தெளிவாகக் காட்டுங்கள்.','⭐ Pupil points':'⭐ மாணவர் புள்ளிகள்','🏆 Group points':'🏆 குழு புள்ளிகள்','Index order':'வரிசை எண்','Name A–Z':'பெயர் A–Z','Highest points':'அதிக புள்ளிகள்','↶ Undo':'↶ மீட்டெடு','Reset points':'புள்ளிகளை மீட்டமை','No pupils found':'மாணவர்கள் இல்லை','No groups found':'குழுக்கள் இல்லை','Add pupils in Class Organisation first.':'முதலில் வகுப்பு ஒழுங்கமைப்பில் மாணவர்களைச் சேர்க்கவும்.','Assign pupils to groups in Class Organisation first.':'முதலில் வகுப்பு ஒழுங்கமைப்பில் மாணவர்களை குழுக்களுக்கு ஒதுக்கவும்.','Search pupil':'மாணவரைத் தேடு','Search group':'குழுவைத் தேடு','Nothing to undo':'மீட்டெடுக்க எதுவுமில்லை','Points reset':'புள்ளிகள் மீட்டமைக்கப்பட்டன',

'Daily Visual Timetable':'தினசரி காட்சி அட்டவணை','Make today predictable and easy to follow.':'இன்றைய அட்டவணையைத் தெளிவாகவும் பின்பற்ற எளிதாகவும் ஆக்குங்கள்.','Today at a glance':'இன்றைய நிகழ்வுகள்','What happens next?':'அடுத்து என்ன?','A clear sequence can make the day feel more predictable.':'தெளிவான வரிசை நாளை எளிதாகப் பின்பற்ற உதவும்.','＋ Add item':'＋ உருப்படி சேர்க்க','▣ Pupil view':'▣ மாணவர் காட்சி','Daily visual timetable':'தினசரி காட்சி அட்டவணை','Paste a timetable screenshot':'அட்டவணை படத்தை ஒட்டவும்','Use Snipping Tool, snip the timetable, then press Ctrl+V. The timetable will be reconstructed automatically.':'Snipping Tool-ஐ பயன்படுத்தி அட்டவணையைப் படம் பிடித்து, பின்னர் Ctrl+V அழுத்தவும். அட்டவணை தானாக உருவாக்கப்படும்.','Snip, then paste':'படம் பிடித்து, பின்னர் ஒட்டவும்','📋 Paste from clipboard':'📋 Clipboard-இலிருந்து ஒட்டு','🖼️ Choose screenshot':'🖼️ படத்தைத் தேர்ந்தெடு','🗓️ Weekly view':'🗓️ வாரக் காட்சி','🖨️ Print class timetable':'🖨️ வகுப்பு அட்டவணையை அச்சிடு','No timetable saved yet. Paste a screenshot above.':'இன்னும் அட்டவணை சேமிக்கப்படவில்லை. மேலே ஒரு படத்தை ஒட்டவும்.','Screenshot import':'பட அட்டவணை இறக்குமதி','Reading your timetable':'உங்கள் அட்டவணையை வாசிக்கிறது','Starting…':'தொடங்குகிறது…','Preparing screenshot…':'படத்தைத் தயாரிக்கிறது…','Reading text and table…':'உரையும் அட்டவணையும் வாசிக்கிறது…','Building timetable…':'அட்டவணையை உருவாக்குகிறது…','Ready to check':'சரிபார்க்கத் தயாராக உள்ளது','Check before saving':'சேமிப்பதற்கு முன் சரிபார்க்கவும்','Timetable detected':'அட்டவணை கண்டறியப்பட்டது','The text was read clearly.':'உரை தெளிவாக வாசிக்கப்பட்டது.','Term':'காலாண்டு','Form teacher':'வகுப்பு ஆசிரியர்','optional':'விருப்பம்','← Paste another':'← மற்றொன்றை ஒட்டு','✓ Save timetable':'✓ அட்டவணையைச் சேமி','Weekly view':'வாரக் காட்சி','Edit any cell if needed, then save your changes.':'தேவையான இடங்களைத் திருத்தி மாற்றங்களைச் சேமிக்கவும்.','← Today':'← இன்று','✓ Save changes':'✓ மாற்றங்களைச் சேமி','Changes saved':'மாற்றங்கள் சேமிக்கப்பட்டன','Timetable saved':'அட்டவணை சேமிக்கப்பட்டது','🗑️ Delete timetable':'🗑️ அட்டவணையை நீக்கு','Day':'நாள்','No lessons entered for this day.':'இந்த நாளுக்குப் பாடங்கள் சேர்க்கப்படவில்லை.',

'No class yet.':'இன்னும் வகுப்பு இல்லை.','＋ Add class':'＋ வகுப்பு சேர்க்க','Allow pop-ups to add a class':'வகுப்பைச் சேர்க்க pop-up சாளரங்களை அனுமதிக்கவும்','Add a class or pupils in Class Organisation first.':'முதலில் வகுப்பு ஒழுங்கமைப்பில் வகுப்பு அல்லது மாணவர்களைச் சேர்க்கவும்.','Add pupils first':'முதலில் மாணவர்களைச் சேர்க்கவும்','Class response cue':'வகுப்பு பதில் குறிப்பு','There is no wrong choice. This helps the teacher know what support you need.':'தவறான தேர்வு எதுவுமில்லை. உங்களுக்கு என்ன உதவி தேவை என்பதை ஆசிரியர் அறிய இது உதவும்.','Show where you are now':'இப்போது உங்கள் நிலையை காட்டுங்கள்',

'Who?':'யார்?','What?':'என்ன?','When?':'எப்போது?','Where?':'எங்கே?','Why?':'ஏன்?','How?':'எப்படி?','Explain':'விளக்குங்கள்','Compare':'ஒப்பிடுங்கள்','Predict':'கணிக்கவும்','What if…?':'இப்படி நடந்தால்…?','What evidence?':'என்ன ஆதாரம்?','Give a reason':'ஒரு காரணம் கூறுங்கள்','How do you know?':'எப்படித் தெரியும்?','Describe':'விவரிக்கவும்','Thinking prompt':'சிந்தனைத் தூண்டல்','Use the prompt to explain your thinking, not just give an answer.':'பதில் மட்டும் சொல்லாமல் உங்கள் சிந்தனையை விளக்க இந்தக் குறிப்பைப் பயன்படுத்துங்கள்.','↻ Spin a question':'↻ ஒரு கேள்வியைத் தேர்ந்தெடு','Use this prompt':'இந்தக் குறிப்பைப் பயன்படுத்து',

'Short reset':'சிறு ஓய்வு','Move safely. Stop if anything feels uncomfortable.':'பாதுகாப்பாக அசையுங்கள். உடலில் ஏதாவது சிரமம் இருந்தால் நிறுத்துங்கள்.','▶ Start 30 sec':'▶ 30 விநாடி தொடங்கு','↻ Another break':'↻ மற்றொரு ஓய்வு','Ready to learn again':'மீண்டும் கற்கத் தயாராக உள்ளது','10 shoulder rolls':'தோள்களை 10 முறைச் சுழற்றுங்கள்','Reach high, then touch your toes':'மேலே நீட்டி, பின்னர் கால் விரல்களைத் தொடுங்கள்','Stand and stretch for 20 seconds':'நின்று 20 விநாடிகள் நீட்டுங்கள்','5 slow star jumps':'மெதுவாக 5 ஸ்டார் ஜம்ப் செய்யுங்கள்','Shake out your hands and legs':'கைகளையும் கால்களையும் அசையுங்கள்','Take 5 slow breaths':'மெதுவாக 5 முறை மூச்செடுக்கவும்','Stretch your arms wide, then relax':'கைகளை அகலமாக நீட்டி, பின்னர் தளர்த்துங்கள்'
,
  "Saved classes:":"சேமித்த வகுப்புகள்:",
  "✏️ Rename Class Timetable":"✏️ வகுப்பு அட்டவணையின் பெயரை மாற்று",
  "⬇ Export Selected Class":"⬇ தேர்ந்த வகுப்பை ஏற்றுமதி செய்",
  "⬆ Import Selected Class":"⬆ தேர்ந்த வகுப்பை இறக்குமதி செய்",
  "⬇ Export All":"⬇ அனைத்தையும் ஏற்றுமதி செய்",
  "⬆ Import All":"⬆ அனைத்தையும் இறக்குமதி செய்",
  "Add another class by pasting its timetable screenshot and saving under a new class name.":"மற்றொரு வகுப்பின் அட்டவணைப் படத்தை ஒட்டி, புதிய வகுப்புப் பெயரில் சேமிக்கவும்.",
  "No timetables yet":"இன்னும் அட்டவணைகள் சேமிக்கப்படவில்லை"
}));

function compact(s){return String(s??'').replace(/\s+/g,' ').trim()}
function translateString(input){
  const raw=String(input??''),s=compact(raw);if(!s)return raw;
  if(EXACT.has(s))return EXACT.get(s);
  let m;
  if((m=s.match(/^(\d+(?:\.\d+)?) min$/)))return `${m[1]} நிமிடம்`;
  if((m=s.match(/^(\d+) sec$/)))return `${m[1]} விநாடி`;
  if((m=s.match(/^(\d+) pupils loaded from (.+)\.$/)))return `${m[1]} மாணவர்கள் ${m[2]} வகுப்பிலிருந்து ஏற்றப்பட்டனர்.`;
  if((m=s.match(/^(\d+) left in this round$/)))return `இந்தச் சுற்றில் இன்னும் ${m[1]} பேர்`;
  if((m=s.match(/^Group (\d+)$/)))return `குழு ${m[1]}`;
  if((m=s.match(/^(\d+) pupil(?:s)? • (\d+) responsibilit(?:y|ies)$/)))return `${m[1]} மாணவர்கள் • ${m[2]} பொறுப்புகள்`;
  if((m=s.match(/^Class: (.+)$/)))return `வகுப்பு: ${m[1]}`;
  if((m=s.match(/^View (Monday|Tuesday|Wednesday|Thursday|Friday)$/)))return `${translateString(m[1])} காட்சி`;
  if((m=s.match(/^Voice: (.+)$/)))return `குரல்: ${m[1]}`;
  if(s==='UK English voice preference enabled')return 'தமிழ் குரல் முன்னுரிமை இயக்கப்பட்டுள்ளது';
  return raw;
}

function translateNode(node){
  if(!node)return;
  if(node.nodeType===3){
    const p=node.parentElement;if(!p||/^(SCRIPT|STYLE|NOSCRIPT|CODE|PRE)$/i.test(p.tagName))return;
    const before=node.nodeValue,trim=compact(before);if(!trim)return;const after=translateString(trim);if(after!==trim){const lead=before.match(/^\s*/)?.[0]||'',trail=before.match(/\s*$/)?.[0]||'';node.nodeValue=lead+after+trail}
    return;
  }
  if(node.nodeType!==1)return;
  const el=node;
  if(el.tagName==='OPTION'&&!el.hasAttribute('value'))el.setAttribute('value',compact(el.textContent));
  for(const attr of ['placeholder','title','aria-label'])if(el.hasAttribute(attr)){const v=el.getAttribute(attr),t=translateString(v);if(t!==v)el.setAttribute(attr,t)}
  for(const child of [...el.childNodes])translateNode(child);
}

function remapUrl(raw){
  if(!raw)return raw;
  try{
    const u=new URL(String(raw),'https://limkimsze-maker.github.io/Classroom-Companion/');
    if(u.origin!==location.origin||!u.pathname.startsWith('/Classroom-Companion/'))return raw;
    const file=u.pathname.split('/').pop()||'';
    if(file==='index.html'||file==='widget-launch.html'||file==='teacher-bookmark.html'||file==='')return new URL('./',location.href).href;
    if(file==='support-tool.html'){
      const tool=u.searchParams.get('tool')||'timer-calm-music';return new URL('support-tool.html?tool='+encodeURIComponent(tool),location.href).href;
    }
    const allowed=['class-organisation.html','daily-duty-roster.html','reward-points.html','configure.html','quote.html','brain-break.html','clock.html'];
    if(allowed.includes(file))return new URL('page.html?src='+encodeURIComponent(file+u.search),location.href).href;
    return raw;
  }catch(e){return raw}
}

function patchSpeech(w){
  try{
    const synth=w.speechSynthesis;if(!synth||synth.__ccTamilPatched)return;synth.__ccTamilPatched=true;
    const original=synth.speak.bind(synth);synth.speak=function(u){try{const t=translateString(u.text||'');if(t!==u.text)u.text=t;if(/[\u0B80-\u0BFF]/.test(u.text||'')){u.lang='ta-SG';u.rate=Math.min(Number(u.rate)||1,.9);const voices=synth.getVoices?.()||[];u.voice=voices.find(v=>/^ta[-_]SG$/i.test(v.lang||''))||voices.find(v=>/^ta[-_]IN$/i.test(v.lang||''))||voices.find(v=>/^ta/i.test(v.lang||''))||u.voice}}catch(e){}return original(u)};
  }catch(e){}
}

function patchWindow(frame){
  let w,d;try{w=frame.contentWindow;d=frame.contentDocument}catch(e){return}if(!w||!d)return;
  try{d.documentElement.lang='ta-SG';d.body&&d.body.style.setProperty('font-family','"Noto Sans Tamil","Nirmala UI",Latha,Inter,system-ui,sans-serif','important')}catch(e){}
  patchSpeech(w);
  try{const oldConfirm=w.confirm.bind(w);w.confirm=msg=>oldConfirm(translateString(msg));const oldAlert=w.alert?.bind(w);if(oldAlert)w.alert=msg=>oldAlert(translateString(msg))}catch(e){}
  try{if(!w.__ccTamilOpenPatched){w.__ccTamilOpenPatched=true;const oldOpen=w.open.bind(w);w.open=function(url,name,features){return oldOpen(remapUrl(url),name,features)}}}catch(e){}
  try{
    d.addEventListener('click',ev=>{
      const el=ev.target?.closest?.('button,a');if(!el)return;const id=el.id||'';
      if(['closeBtn','close'].includes(id)){ev.preventDefault();ev.stopImmediatePropagation();try{window.top.close()}catch(e){};return}
      if(id==='mainBtn'){ev.preventDefault();ev.stopImmediatePropagation();try{window.top.close()}catch(e){};return}
      if(['editBtn','editBottom'].includes(id)&&/daily-duty-roster|reward-points/.test(w.location.pathname)){ev.preventDefault();ev.stopImmediatePropagation();location.href='page.html?src='+encodeURIComponent('class-organisation.html')+'&v='+Date.now();return}
      if(el.tagName==='A'&&el.href){const mapped=remapUrl(el.href);if(mapped!==el.href)el.href=mapped}
    },true);
  }catch(e){}
}

function attach(frame){
  let d;try{d=frame.contentDocument}catch(e){return}if(!d)return;
  patchWindow(frame);
  if(d.title){const base=d.title.replace(/\s*•\s*Classroom Companion\s*$/,'');const t=translateString(base);d.title=(t||base)+' • வகுப்பறை உதவியாளர்'}
  translateNode(d.body||d.documentElement);
  try{const obs=new MutationObserver(list=>{for(const m of list){if(m.type==='characterData')translateNode(m.target);else for(const n of m.addedNodes)translateNode(n)}});obs.observe(d.documentElement,{subtree:true,childList:true,characterData:true})}catch(e){}
  setTimeout(()=>translateNode(d.body||d.documentElement),80);
  setTimeout(()=>translateNode(d.body||d.documentElement),350);
  setTimeout(()=>translateNode(d.body||d.documentElement),900);
}

window.CCTamil={attach,translateString,remapUrl};
})();
