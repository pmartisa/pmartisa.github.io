var storyContent = ﻿{"inkVersion":19,"root":[["^You live in Manhattan and use a wheelchair to get around. Your are not alone.","\n","^More than half a million New Yorkers living in the City have difficulty walking, according to official statistics.","\n","^You need to go to an urgent doctor's appointment 7 miles from your place. <b>How will you get there?</b>","\n",["ev",{"^->":"0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":18},{"s":["^<b>Take a bus</b>",{"->":"$r","var":true},null]}],["ev",{"^->":"0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-1","flg":18},{"s":["^<b>Take a subway</b>",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.6.s"},[{"#n":"$r2"}],"\n","^You know that only 25% of NYC subway stations are accessible, so you go for the safest option. The bus arrives. A ramp is lowered by the bus driver. <b>You get in without problem!</b> Good news, traffic isn’t as bad as you thought.","\n",[["ev",{"^->":"0.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^<b>Arrive at bus stop</b>",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^<p>There’s construction at the bus stop in front of the hospital, so you have to get off a couple of blocks away from the entrance. You start moving down the sidewalk, but a scaffold covers the narrow sidewalk and <b>some large trash bags are obstructing your pass</b>. You decide to:<p>","\n",[["ev",{"^->":"0.c-0.9.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^<b>Go back, and reroute to the other side of the street</b>",{"->":"$r","var":true},null]}],["ev",{"^->":"0.c-0.9.c-0.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^<b>Try to squeeze by the trashbags</b>",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.9.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^It’s rough going, but you continue, rushing because you’re a little late. You hit a huge crack and hear a gut-wrenching noise come from your chair.","\n","^<b>You know that sound – your shocks have been damaged.</b> This means you’ll have to spend months trying to get approval from your doctor and the insurance company to get it fixed.","\n","^You’re too discouraged and decide to take a taxi home. You’ll reschedule your appointment for another day. ","end","\n",{"->":"0.g-0"},{"#f":5}],"c-1":["ev",{"^->":"0.c-0.9.c-0.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Bad decision. You get stuck. A rat scurries out from under the garbage. Ugh. You know you can't make it alone.","\n",[["ev",{"^->":"0.c-0.9.c-0.9.c-1.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^<b>A passerby offers to help</b>.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.9.c-0.9.c-1.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^A friendly person helps move the trash out of your way so you can go forward.","\n","^You’re just a block away. You get to your doctor’s appointment 15 minutes late but she still sees you.","\n","^You have an informative appointment and leave happy you prioritized your health. ","end","\n","^There’s construction at the bus stop in front of the hospital, so you have to get off a couple of blocks away from the entrance. You start moving down the sidewalk, but a scaffold covers the narrow sidewalk and some large trash bags are obstructing your pass. You decide to:","\n",{"->":"0.g-0"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"0.7.s"},[{"#n":"$r2"}],"\n","^You decide to travel to the nearest accessible subway station to take the train, aware that <b>only 25% of NYC subway stations are accessible,</b> the lowest percentage of any major transit system in the world, according to a NYT analysis.","\n","^You take the elevator down to the platform and a train comes in just a few minutes. Wonderful.","\n","^You get to your destination a little bit early, but now you need to get out the subway station, of course!","\n",[["ev",{"^->":"0.c-1.13.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^<b>Get to the elevator</b>",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-1.13.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^You make your way there only to see that it says “Out of Service.” This is not an uncommon experience. <b>In 2017 subway elevators had an average of 53 outages per year, according to a New York University report</b>.","\n",[["ev",{"^->":"0.c-1.13.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^<b> Take the train to another accessible station</b>",{"->":"$r","var":true},null]}],["ev",{"^->":"0.c-1.13.c-0.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^<b> Go back home</b>",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-1.13.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^You wait for the train for 5 minutes and you got on without problem. You got off on at a stop roughly 12 minutes from your doctor’s office.","\n","^<b>The elevator is working here, fortunately</b>. You take it to the top floor and exit the station.","\n",[["ev",{"^->":"0.c-1.13.c-0.9.c-0.11.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^<b>Ride on the sidewalk</b>",{"->":"$r","var":true},null]}],["ev",{"^->":"0.c-1.13.c-0.9.c-0.11.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^<b>Take the bus</b>",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-1.13.c-0.9.c-0.11.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^You start moving down the sidewalk. You make it a few blocks, but as you’re crossing the street, the curb of the next stretch of sidewalk is too steep.","\n","^Of 162,000 sidewalk curbs in NYC, <b>about 108,000 are dangerous for people with disabilities</b> to navigate, according to a report by The City.","\n",[["ev",{"^->":"0.c-1.13.c-0.9.c-0.11.c-0.11.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^<b>Reroute to the other side of the street</b>",{"->":"$r","var":true},null]}],["ev",{"^->":"0.c-1.13.c-0.9.c-0.11.c-0.11.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^<b>Try to go fast and jump the curb</b>",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-1.13.c-0.9.c-0.11.c-0.11.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^It is annoying and takes more time, but <b>you’ve avoided a potentially hazardous situation.</b> You’re just 2 blocks away. You get to your doctor’s appointment 15 minutes late but she still sees you. You have an informative appointment and leave happy you prioritize your health. ","end","\n",{"->":"0.g-0"},{"#f":5}],"c-1":["ev",{"^->":"0.c-1.13.c-0.9.c-0.11.c-0.11.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Your wheel catches on the curb and you’re thrown from the chair.","\n","^Fortunately, you’re not hurt but just a bit shaken. <b>A passerby helps you back into the chair and over the curb.</b>  You’re just a block away.","\n","^You get to your doctor’s appointment 15 minutes late, but she still sees you. You have an informative appointment and leave happy you prioritize your health ","end","\n",{"->":"0.g-0"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"0.c-1.13.c-0.9.c-0.11.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^Great. The bus is 7 minutes away. You board the bus and it takes you right in front of the entrance to the hospital. <b>You make it 10 minutes late,</b> but your doctor still sees you. You have an informative appointment and leave happy you prioritize your health. ","end","\n",{"->":"0.g-0"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"0.c-1.13.c-0.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","^You are frustated, late and decide the best might be just to miss your doctor’s appointment. You reschedule your appointment for another day. ","end","\n",{"->":"0.g-0"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"#f":1}],"listDefs":{}};