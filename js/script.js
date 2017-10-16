/*global $, TweenMax, TimelineMax, Elastic, alert, console, Jockey */
$(document).ready(function () {
    
    'use strict';
    
    var isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase())),
		interactionUp,
		interactionDown,
		interactionOver,
		interactionMove,
        tl,
        iconsAnime,
        userid,
        username;
	
	if (isDevice) {
		interactionUp = "touchend";
		interactionDown = "touchstart";
		interactionOver = interactionDown;
		interactionMove = 'touchmove';
	} else {
		interactionUp = "click";
		interactionDown = "mousedown";
		interactionOver = "mouseover";
		interactionMove = 'mousemove';

	}
    
    /*------************-----------START--------****************-------*/
	// make userid by create cookies
	function setCookie(cname, cvalue, exdays) {
		
		var d, expires;
		
		d = new Date();
		
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		
		expires = "expires=" + d.toGMTString();
		
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
		
	function getCookie(name) {
		var nameEQ = name + "=",
			ca = document.cookie.split(';'),
			i,
			c;
		
		for (i = 0; i < ca.length; i += 1) {
			c = ca[i];
			while (c.charAt(0) === ' ') {c = c.substring(1, c.length); }
			if (c.indexOf(nameEQ) === 0) {
				return c.substring(nameEQ.length, c.length);
			}
		}
		return null;
	}

	function eraseCookie(name) {
		setCookie(name, "", -1);
	}
    
    
    $('#login-form').submit(function (event) {
        
        var username = $('#username').val(),
            password = $('#password').val(),
            url = "http://apimind.digitalcatsite.com/login/" + username + "/" + password;

        if (username === "" || password === "") {

            alert('Empty Values!!');

        }

        $.get(url, function (output) {

            var out = JSON.parse(output);

            console.log(out);

            if (out.state === "0") {

                alert(out.Message);

            } else if (out.state === "1") {
                
                location.href = "home.html";
                
                setCookie('userid', out.userdata[0].id, 7);
                setCookie('username', out.userdata[0].username, 7);

            }

        });
        
        event.preventDefault();

    });
    
    userid = getCookie('userid');
    username = getCookie('username');
    
    $('.sign-out i').on(interactionUp, function () {
        location.href = 'index.html';
    });
    
    // Icons Anime

    // Invoke it as a function when clicked
    function iconsAnimeFunc() {
        var tl = new TimelineMax();
        iconsAnime = $("#icons-container img").toArray();
    
        tl.staggerFrom(iconsAnime, 1, {
            scale: 0,
            opacity: "0",
            ease: Elastic.easeInOut
        }, 0.08);
    }
    
    iconsAnimeFunc();
    
    // **************************************************** //
    
    $('.ref-btn-group li a').on(interactionUp, function () {
        
        var sectionName = $(this).attr('fk_mind_id'),
            PDFName = $(this).attr('pdf_name'),
            data = {username: username, fk_mind_id: sectionName, pdf_name: PDFName};
        
        console.log(username + ' -> ' + sectionName + ' : ' + PDFName);
        
        
        
        $.post('http://apimind.digitalcatsite.com/statistics/add', data, function (out) {
            console.log(out);
        });
        
    });
    
    $('#btn-ref-1').on(interactionUp, function () {
        Jockey.send("log", "../pdf/1-molecules/01-Atenolol vs BisoProlol As cardio Protective/1. Ateno - Biso effects on Heart Rate_5481.pdf");
    });
    
    $('#btn-ref-2').on(interactionUp, function () {
        Jockey.send("log", "../pdf/1-molecules/01-Atenolol vs BisoProlol As cardio Protective/2. Ateno - Biso effect on ABPM_5894.pdf");
    });
    
    $('#btn-ref-3').on(interactionUp, function () {
        Jockey.send("log", "../pdf/1-molecules/01-Atenolol vs BisoProlol As cardio Protective/3. ESC Guidelines 2016_67490.pdf");
    });
    
    $('#btn-ref-4').on(interactionUp, function () {
        Jockey.send("log", "../pdf/1-molecules/01-Atenolol vs BisoProlol As cardio Protective/4. CIBIS II Study_4210.pdf");
    });
    
    $('#btn-ref-5').on(interactionUp, function () {
        Jockey.send("log", "../pdf/1-molecules/01-Atenolol vs BisoProlol As cardio Protective/5. Impact on Lipids_4140.pdf");
    });
    
    $('#btn-ref-6').on(interactionUp, function () {
        Jockey.send("log", "../pdf/1-molecules/02-Nebivilol handling/1. Cruickshank Int J Cardiol 2007_14292.pdf");
    });
    
    $('#btn-ref-7').on(interactionUp, function () {
        Jockey.send("log", "../pdf/1-molecules/02-Nebivilol handling/2. Nebivolol 3rd generation_10104.pdf");
    });
    
    $('#btn-ref-8').on(interactionUp, function () {
        Jockey.send("log", "../pdf/1-molecules/02-Nebivilol handling/3. Nebivolol vs Atenolol_5558.pdf");
    });
    
    $('#btn-ref-9').on(interactionUp, function () {
        Jockey.send("log", "../pdf/1-molecules/02-Nebivilol handling/4. Moen MD, Wagstaff AJ. Nebivolol_15120.pdf");
    });
    
    $('#btn-ref-10').on(interactionUp, function () {
        Jockey.send("log", "../pdf/1-molecules/03-Concor VS NebiVelol in terms of cardio Selectivity/1. Cruickshank Int J Cardiol 2007_14292.pdf");
    });
    
    $('#btn-ref-11').on(interactionUp, function () {
        Jockey.send("log", "../pdf/1-molecules/03-Concor VS NebiVelol in terms of cardio Selectivity/2. Concor Selectivity on Human Myocardium Cells_7940.pdf");
    });
    
    $('#btn-ref-12').on(interactionUp, function () {
        Jockey.send("log", "../pdf/1-molecules/03-Concor VS NebiVelol in terms of cardio Selectivity/3. approved insert_Concor Eng_10104.pdf");
    });
    
    $('#btn-ref-13').on(interactionUp, function () {
        Jockey.send("log", "../pdf/1-molecules/03-Concor VS NebiVelol in terms of cardio Selectivity/4. Moen MD, Wagstaff AJ. Nebivolo_15120.pdf");
    });
    
    $('#btn-ref-14').on(interactionUp, function () {
        Jockey.send("log", "../pdf/1-molecules/04-Metoprolol Handling/1. Bisoprolol Selectivity_3368.pdf");
    });
    
    $('#btn-ref-15').on(interactionUp, function () {
        Jockey.send("log", "../pdf/1-molecules/04-Metoprolol Handling/2. Balanced Clearance_5859.pdf");
    });
    
    $('#btn-ref-16').on(interactionUp, function () {
        Jockey.send("log", "../pdf/1-molecules/04-Metoprolol Handling/3. Balanced Clearance - 2_3865.pdf");
    });
    
    $('#btn-ref-17').on(interactionUp, function () {
        Jockey.send("log", "../pdf/1-molecules/04-Metoprolol Handling/4. China CREATIVE study full article_6328.pdf");
    });
    
    $('#btn-ref-18').on(interactionUp, function () {
        Jockey.send("log", "../pdf/2-renal_patients/01-Effect of Concor Plus on Renal Patients/1. approved insert_Concor Eng_10104.pdf");
    });
    
    $('#btn-ref-19').on(interactionUp, function () {
        Jockey.send("log", "../pdf/2-renal_patients/01-Effect of Concor Plus on Renal Patients/2. Approved insert of Concor 5 & 10 plus_8420.pdf");
    });
    
    $('#btn-ref-20').on(interactionUp, function () {
        Jockey.send("log", "../pdf/2-renal_patients/02-Concor Decrease renal  Flow/1. Parrinello2009_8151.pdf");
    });
    
    $('#btn-ref-21').on(interactionUp, function () {
        Jockey.send("log", "../pdf/2-renal_patients/02-Concor Decrease renal  Flow/2. approved insert_Concor Eng_10104.pdf");
    });
    
    $('#btn-ref-22').on(interactionUp, function () {
        Jockey.send("log", "../pdf/2-renal_patients/03-Concor in Renal Failure/1. approved insert_Concor Eng_10104.pdf");
    });
    
    $('#btn-ref-23').on(interactionUp, function () {
        Jockey.send("log", "../pdf/2-renal_patients/03-Concor in Renal Failure/2. Balanced Clearance_5859.pdf");
    });
    
    $('#btn-ref-24').on(interactionUp, function () {
        Jockey.send("log", "../pdf/2-renal_patients/03-Concor in Renal Failure/3. Balanced Clearance - 2_3865.pdf");
    });
    
    $('#btn-ref-25').on(interactionUp, function () {
        Jockey.send("log", "../pdf/3-male/Sexual impotence Claims/1. approved insert_Concor Eng_10104-- 8.46.39 PM.pdf");
    });
    
    $('#btn-ref-26').on(interactionUp, function () {
        Jockey.send("log", "../pdf/3-male/Sexual impotence Claims/1. approved insert_Concor Eng_10104.pdf");
    });
    
    $('#btn-ref-27').on(interactionUp, function () {
        Jockey.send("log", "../pdf/3-male/Sexual impotence Claims/2. Self Reporting - Concor vs Placebo_4210.pdf");
    });
    
    $('#btn-ref-28').on(interactionUp, function () {
        Jockey.send("log", "../pdf/3-male/Sexual impotence Claims/3. Study in Journal of Sex & Marital Therapy_6696.pdf");
    });
    
    $('#btn-ref-29').on(interactionUp, function () {
        Jockey.send("log", "../pdf/3-male/Sexual impotence Claims/4. Different incidence of impotence with different Beta Blockers_1827.pdf");
    });
    
    $('#btn-ref-30').on(interactionUp, function () {
        Jockey.send("log", "../pdf/3-male/Sexual impotence Claims/5. Beta Blockers Safety_4710.pdf");
    });
    
    $('#btn-ref-31').on(interactionUp, function () {
        Jockey.send("log", "../pdf/4-liver/Portal Hypertension/1. BBs and Portal Hypertension_10179.pdf");
    });
    
    $('#btn-ref-32').on(interactionUp, function () {
        Jockey.send("log", "../pdf/5-bradi_cardiya/01-Patients with HR of 60/1. approved insert_Concor Eng_10104.pdf");
    });
    
    $('#btn-ref-33').on(interactionUp, function () {
        Jockey.send("log", "../pdf/5-bradi_cardiya/02-approved insert_Concor Eng/1. approved insert_Concor Eng.pdf");
    });
    
    $('#btn-ref-34').on(interactionUp, function () {
        Jockey.send("log", "../pdf/5-bradi_cardiya/03-Ivabradine/1. ESC Guidelines 2016_67490.pdf");
    });
    
    $('#btn-ref-35').on(interactionUp, function () {
        Jockey.send("log", "../pdf/6-miscelleneous/1. Concor and Fatigue/1. approved insert_Concor Eng_10104.pdf");
    });
    
    $('#btn-ref-36').on(interactionUp, function () {
        Jockey.send("log", "../pdf/6-miscelleneous/1. Concor and Fatigue/2. Beta Blockers Safety_4716.pdf");
    });
    
    $('#btn-ref-37').on(interactionUp, function () {
        Jockey.send("log", "../pdf/6-miscelleneous/2. Concor and Cold Extremities/1. approved insert_Concor Eng_10104.pdf");
    });
    
    $('#btn-ref-38').on(interactionUp, function () {
        Jockey.send("log", "../pdf/6-miscelleneous/3. Concor Efficacy in HyperTension  reduction/1. THE GENRES STUDY_6264.pdf");
    });
    
    $('#btn-ref-39').on(interactionUp, function () {
        Jockey.send("log", "../pdf/6-miscelleneous/4. ARBs and MI/1. RAASinhibitors meta-anaEditorial Ruschitzka-Taddei EHJ2012_2382.pdf");
    });
    
    $('#btn-ref-40').on(interactionUp, function () {
        Jockey.send("log", "../pdf/6-miscelleneous/4. ARBs and MI/2. 19% increased MI VALUE Study_8420.pdf");
    });
    
    $('#btn-ref-41').on(interactionUp, function () {
        Jockey.send("log", "../pdf/6-miscelleneous/4. ARBs and MI/3. ARBs MI Paradox_14877.pdf");
    });
    
    $('#btn-ref-42').on(interactionUp, function () {
        Jockey.send("log", "../pdf/6-miscelleneous/4. ARBs and MI/4. Olmesartan increase CV Deaths_7119.pdf");
    });
    
    $('#btn-ref-43').on(interactionUp, function () {
        Jockey.send("log", "../pdf/6-miscelleneous/4. ARBs and MI/5. RAASinhibitors meta-ana vanVark EHJ2012_7940.pdf");
    });
    
    $('#btn-ref-44').on(interactionUp, function () {
        Jockey.send("log", "../pdf/6-miscelleneous/4. ARBs and MI/6. Fuchs, 2013, 44_1928.pdf");
    });
    
    $('#btn-ref-45').on(interactionUp, function () {
        Jockey.send("log", "../pdf/6-miscelleneous/4. ARBs and MI/7. HIJ CREATE_2382.pdf");
    });
    
    $('#btn-ref-46').on(interactionUp, function () {
        Jockey.send("log", "../pdf/6-miscelleneous/4. ARBs and MI/8. Olmesartan_8316.pdf");
    });
    
    $('#btn-ref-47').on(interactionUp, function () {
        Jockey.send("log", "../pdf/6-miscelleneous/5. ACE-Is and Anemia/1. Hypertension Principles (P. 503)_674622.pdf");
    });
    
    $('#btn-ref-48').on(interactionUp, function () {
        Jockey.send("log", "../pdf/6-miscelleneous/6. Concor and Atheletics/1. Bisoprolol and Exercise_6264.pdf");
    });
    
    $('#btn-ref-49').on(interactionUp, function () {
        Jockey.send("log", "../pdf/6-miscelleneous/7. Concor and Pregnancy/1. approved insert_Concor Eng_10104.pdf");
    });
    
    $('#btn-ref-50').on(interactionUp, function () {
        Jockey.send("log", "../pdf/6-miscelleneous/7. Concor and Pregnancy/2. Approved English insert of Concor 5 & 10 plus_8420.pdf");
    });
    
    $('#btn-ref-51').on(interactionUp, function () {
        Jockey.send("log", "../pdf/6-miscelleneous/8. Concor and Migraine/EFNS_guideline_2009_drug_treatment_of_migraine_10962.pdf");
    });
    
    $('#btn-ref-52').on(interactionUp, function () {
        Jockey.send("log", "../pdf/6-miscelleneous/9. PAD & Vasodilator BBs/1. Beta Blockers in CV Medicine.pdf");
    });
    
    $('#btn-ref-53').on(interactionUp, function () {
        Jockey.send("log", "../pdf/7-lipid_profile/Concor impact on lipid profile/1. Impact on Lipids_4140.pdf");
    });
    
    $('#btn-ref-54').on(interactionUp, function () {
        Jockey.send("log", "../pdf/7-lipid_profile/Concor impact on lipid profile/2. Bisoprolol Selectivity_3368.pdf");
    });
    
    $('#btn-ref-55').on(interactionUp, function () {
        Jockey.send("log", "../pdf/8-concor_and_eye_isorder/Concor and Eye Disorders/1. approved insert_Concor Eng_10104.pdf");
    });
    
    $('#btn-ref-56').on(interactionUp, function () {
        Jockey.send("log", "../pdf/8-concor_and_eye_isorder/Concor and Eye Disorders/2. Approved English insert of Concor 5 & 10 plus_8420.pdf");
    });
    
    $('#btn-ref-57').on(interactionUp, function () {
        Jockey.send("log", "../pdf/9-nightmares/Concor and Nightmares/1. approved insert_Concor Eng_10104.pdf");
    });
    
    $('#btn-ref-58').on(interactionUp, function () {
        Jockey.send("log", "../pdf/9-nightmares/Concor and Nightmares/2. Beta Blockers Safety_4716.pdf");
    });
    
    $('#btn-ref-59').on(interactionUp, function () {
        Jockey.send("log", "../pdf/10-jnc_8_claims/JNC 8 Handling/1. JNC 8 2014_11088.pdf");
    });
    
    $('#btn-ref-60').on(interactionUp, function () {
        Jockey.send("log", "../pdf/10-jnc_8_claims/JNC 8 Handling/2. JNC 8 Critical Assessment 3_1584.pdf");
    });
    
    $('#btn-ref-61').on(interactionUp, function () {
        Jockey.send("log", "../pdf/10-jnc_8_claims/JNC 8 Handling/3. Panel disagreement_4668.pdf");
    });
    
    $('#btn-ref-62').on(interactionUp, function () {
        Jockey.send("log", "../pdf/10-jnc_8_claims/JNC 8 Handling/4. ESH-ESC Guidelines_57168.pdf");
    });
    
    $('#btn-ref-63').on(interactionUp, function () {
        Jockey.send("log", "../pdf/10-jnc_8_claims/JNC 8 Handling/5. Meta-ana 147 trials BMJ2009_1586.pdf");
    });
    
    $('#btn-ref-64').on(interactionUp, function () {
        Jockey.send("log", "../pdf/11-ascot_claims/ASCOT Trial Handling/1. ESH ESC 2009 reappraisal_29716.pdf");
    });
    
    $('#btn-ref-65').on(interactionUp, function () {
        Jockey.send("log", "../pdf/11-ascot_claims/ASCOT Trial Handling/2. Prevention of risk factors_BB_2009 Prof_. G Mancia_4764.pdf");
    });
    
    $('#btn-ref-66').on(interactionUp, function () {
        Jockey.send("log", "../pdf/11-ascot_claims/ASCOT Trial Handling/3. Ateno - Biso effect on ABPM_5894.pdf");
    });
    
    $('#btn-ref-67').on(interactionUp, function () {
        Jockey.send("log", "../pdf/11-ascot_claims/ASCOT Trial Handling/4. bisoprolol-PLOSONE_6328.pdf");
    });
    
    $('#btn-ref-68').on(interactionUp, function () {
        Jockey.send("log", "../pdf/11-ascot_claims/ASCOT Trial Handling/5. UKPDS 39_7128.pdf");
    });
    
    $('#btn-ref-69').on(interactionUp, function () {
        Jockey.send("log", "../pdf/11-ascot_claims/ASCOT Trial Handling/6. Meta-ana 147 trials BMJ2009_15086.pdf");
    });
    
    $('#btn-ref-70').on(interactionUp, function () {
        Jockey.send("log", "../pdf/12-diabetic/01-Concor and COPD, Diabetic and Pre-Diabetic/1. approved insert_Concor Eng_10104.pdf");
    });
    
    $('#btn-ref-71').on(interactionUp, function () {
        Jockey.send("log", "../pdf/12-diabetic/01-Concor and COPD, Diabetic and Pre-Diabetic/2. Selective BBs & Serious Hypoglycemia_2936.pdf");
    });
    
    $('#btn-ref-72').on(interactionUp, function () {
        Jockey.send("log", "../pdf/12-diabetic/01-Concor and COPD, Diabetic and Pre-Diabetic/3. Prevention of risk factors_BB_2009 Prof. G Mancia_4764.pdf");
    });
    
    $('#btn-ref-73').on(interactionUp, function () {
        Jockey.send("log", "../pdf/12-diabetic/02-Concor vs Carvedilol/1. Prevention of risk factors_BB_2009 Prof. G Mancia_4764.pdf");
    });
    
    $('#btn-ref-74').on(interactionUp, function () {
        Jockey.send("log", "../pdf/12-diabetic/02-Concor vs Carvedilol/2. Carvedilol in Hypertension_6336.pdf");
    });
    
    $('#btn-ref-75').on(interactionUp, function () {
        Jockey.send("log", "../pdf/12-diabetic/02-Concor vs Carvedilol/3. Biso vs Carve CHF COPD_4752.pdf");
    });
    
    $('#btn-ref-76').on(interactionUp, function () {
        Jockey.send("log", "../pdf/12-diabetic/02-Concor vs Carvedilol/4. Biso vs Carvi on Heart Rate_4210.pdf");
    });
    
    $('#btn-ref-77').on(interactionUp, function () {
        Jockey.send("log", "../pdf/12-diabetic/02-Concor vs Carvedilol/5. CIBIS-ELD Results Duengen EJHF2011 print_8734.pdf");
    });
    
    $('#btn-ref-78').on(interactionUp, function () {
        Jockey.send("log", "../pdf/12-diabetic/02-Concor vs Carvedilol/6. CHF anemia COMET EHJ 2006_5558.pdf");
    });
    
    $('#btn-ref-79').on(interactionUp, function () {
        Jockey.send("log", "../pdf/12-diabetic/03-BBs_ACEI in diabetics/1. ESH-ESC 2013_57168.pdf");
    });
    
    $('#btn-ref-80').on(interactionUp, function () {
        Jockey.send("log", "../pdf/12-diabetic/03-BBs_ACEI in diabetics/2. Multiple Therapy in Diabetics_8613.pdf");
    });
    
    $('#btn-ref-81').on(interactionUp, function () {
        Jockey.send("log", "../pdf/12-diabetic/03-BBs_ACEI in diabetics/3. Diabetes and Sympathetic_4698.pdf");
    });
    
    $('#btn-ref-82').on(interactionUp, function () {
        Jockey.send("log", "../pdf/12-diabetic/03-BBs_ACEI in diabetics/4. Diabetes Coronary Risk_2349.pdf");
    });
    
    $('#btn-ref-83').on(interactionUp, function () {
        Jockey.send("log", "../pdf/12-diabetic/03-BBs_ACEI in diabetics/5. Silent Ischemia with Diabetics_5052.pdf");
    });
    
    $('#btn-ref-84').on(interactionUp, function () {
        Jockey.send("log", "../pdf/12-diabetic/03-BBs_ACEI in diabetics/6. Parrinello2009_8151.pdf");
    });
    
    $('#btn-ref-85').on(interactionUp, function () {
        Jockey.send("log", "../pdf/12-diabetic/03-BBs_ACEI in diabetics/7. UKPDS 39_7128.pdf");
    });
    
    $('#btn-ref-86').on(interactionUp, function () {
        Jockey.send("log", "../pdf/12-diabetic/03-BBs_ACEI in diabetics/8. Selective BBs & Serious Hypoglycemia_2936.pdf");
    });

    // ******************************************************************************** //


    $('.molecules-container .fa-home').click(function () {
        iconsAnimeFunc();
        $('#content-container').fadeOut(500);
        $('.molecules-container').fadeOut(500);
    });
    
    
    $('.molecules-icon').click(function () {
        $('#content-container').fadeIn(500);
        $('.molecules-container').fadeIn(500);
    });

    // Molecules Sub Container #01
    $('.molecules-container .link01').click(function () {
        $('.molecules-container .sub-container').fadeIn(500);
        $('.molecules-container .first-container').fadeIn(500);
    });
    $('.molecules-container .first-container .fa-times').click(function () {
        $('.molecules-container .first-container').fadeOut(500);
    });

    // Molecules Sub Container #02
    $('.molecules-container .link02').click(function () {
        $('.molecules-container .sub-container').fadeIn(500);
        $('.molecules-container .second-container').fadeIn(500);
    });
    $('.molecules-container .second-container .fa-times').click(function () {
        $('.molecules-container .second-container').fadeOut(500);
    });

    // Molecules Sub Container #03
    $('.molecules-container .link03').click(function () {
        $('.molecules-container .sub-container').fadeIn(500);
        $('.molecules-container .third-container').fadeIn(500);
    });
    $('.molecules-container .third-container .fa-times').click(function () {
        $('.molecules-container .third-container').fadeOut(500);
    });

    // Molecules Sub Container #04
    $('.molecules-container .link04').click(function () {
        $('.molecules-container .sub-container').fadeIn(500);
        $('.molecules-container .fourth-container').fadeIn(500);
    });
    $('.molecules-container .fourth-container .fa-times').click(function () {
        $('.molecules-container .fourth-container').fadeOut(500);
    });

    // ******************************************************************************** //

    $('.renal-icon').click(function () {
        $('#content-container').fadeIn(500);
        $('.renal-container').fadeIn(500);
    });

    $('.renal-container .fa-home').click(function () {
        iconsAnimeFunc();
        $('#content-container').fadeOut(500);
        $('.renal-container').fadeOut(500);
    });

    // Renal Sub Container #01
    $('.renal-container .link01').click(function () {
        $('.renal-container .sub-container').fadeIn(500);
        $('.renal-container .first-container').fadeIn(500);
    });
    $('.renal-container .first-container .fa-times').click(function () {
        $('.renal-container .first-container').fadeOut(500);
    });

    // Renal Sub Container #02
    $('.renal-container .link02').click(function () {
        $('.renal-container .sub-container').fadeIn(500);
        $('.renal-container .second-container').fadeIn(500);
    });
    $('.renal-container .second-container .fa-times').click(function () {
        $('.renal-container .second-container').fadeOut(500);
    });

    // Renal Sub Container #03
    $('.renal-container .link03').click(function () {
        $('.renal-container .sub-container').fadeIn(500);
        $('.renal-container .third-container').fadeIn(500);
    });
    $('.renal-container .third-container .fa-times').click(function () {
        $('.renal-container .third-container').fadeOut(500);
    });

    // ******************************************************************************** //

    $('.male-icon').click(function () {
        $('#content-container').fadeIn(500);
        $('.male-container').fadeIn(500);
    });

    $('.male-container .fa-home').click(function () {
        iconsAnimeFunc();
        $('#content-container').fadeOut(500);
        $('.male-container').fadeOut(500);
    });

    // Renal Sub Container #01
    $('.male-container .link01').click(function () {
        $('.male-container .sub-container').fadeIn(500);
        $('.male-container .first-container').fadeIn(500);
    });
    $('.male-container .first-container .fa-times').click(function () {
        $('.male-container .first-container').fadeOut(500);
    });

    // ******************************************************************************** //

    $('.liver-icon').click(function () {
        $('#content-container').fadeIn(500);
        $('.liver-container').fadeIn(500);
    });

    $('.liver-container .fa-home').click(function () {
        iconsAnimeFunc();
        $('#content-container').fadeOut(500);
        $('.liver-container').fadeOut(500);
    });

    // Liver Sub Container #01
    $('.liver-container .link01').click(function () {
        $('.liver-container .sub-container').fadeIn(500);
        $('.liver-container .first-container').fadeIn(500);
    });
    $('.liver-container .first-container .fa-times').click(function () {
        $('.liver-container .first-container').fadeOut(500);
    });

    // ******************************************************************************** //

    $('.brady-icon').click(function () {
        $('#content-container').fadeIn(500);
        $('.brady-container').fadeIn(500);
    });

    $('.brady-container .fa-home').click(function () {
        iconsAnimeFunc();
        $('#content-container').fadeOut(500);
        $('.brady-container').fadeOut(500);
    });

    // Brady Sub Container #01
    $('.brady-container .link01').click(function () {
        $('.brady-container .sub-container').fadeIn(500);
        $('.brady-container .first-container').fadeIn(500);
    });
    $('.brady-container .first-container .fa-times').click(function () {
        $('.brady-container .first-container').fadeOut(500);
    });

    // Brady Sub Container #02
    $('.brady-container .link02').click(function () {
        $('.brady-container .sub-container').fadeIn(500);
        $('.brady-container .second-container').fadeIn(500);
    });
    $('.brady-container .second-container .fa-times').click(function () {
        $('.brady-container .second-container').fadeOut(500);
    });

    // Brady Sub Container #03
    $('.brady-container .link03').click(function () {
        $('.brady-container .sub-container').fadeIn(500);
        $('.brady-container .third-container').fadeIn(500);
    });
    $('.brady-container .third-container .fa-times').click(function () {
        $('.brady-container .third-container').fadeOut(500);
    });

    // ******************************************************************************** //
    
    $('.misc-icon').click(function () {
        $('#content-container').fadeIn(500);
        $('.misc-container').fadeIn(500);
    });

    $('.misc-container .fa-home').click(function () {
        iconsAnimeFunc();
        $('#content-container').fadeOut(500);
        $('.misc-container').fadeOut(500);
    });

    // Misc Sub Container #01
    $('.misc-container .link01').click(function () {
        $('.misc-container .sub-container').fadeIn(500);
        $('.misc-container .first-container').fadeIn(500);
    });
    $('.misc-container .first-container .fa-times').click(function () {
        $('.misc-container .first-container').fadeOut(500);
    });

    // Misc Sub Container #02
    $('.misc-container .link02').click(function () {
        $('.misc-container .sub-container').fadeIn(500);
        $('.misc-container .second-container').fadeIn(500);
    });
    $('.misc-container .second-container .fa-times').click(function () {
        $('.misc-container .second-container').fadeOut(500);
    });

    // Misc Sub Container #03
    $('.misc-container .link03').click(function () {
        $('.misc-container .sub-container').fadeIn(500);
        $('.misc-container .third-container').fadeIn(500);
    });
    $('.misc-container .third-container .fa-times').click(function () {
        $('.misc-container .third-container').fadeOut(500);
    });

    // Misc Sub Container #04
    $('.misc-container .link04').click(function () {
        $('.misc-container .sub-container').fadeIn(500);
        $('.misc-container .fourth-container').fadeIn(500);
    });
    $('.misc-container .fourth-container .fa-times').click(function () {
        $('.misc-container .fourth-container').fadeOut(500);
    });

    // Misc Sub Container #05
    $('.misc-container .link05').click(function () {
        $('.misc-container .sub-container').fadeIn(500);
        $('.misc-container .fifth-container').fadeIn(500);
    });
    $('.misc-container .fifth-container .fa-times').click(function () {
        $('.misc-container .fifth-container').fadeOut(500);
    });

    // Misc Sub Container #06
    $('.misc-container .link06').click(function () {
        $('.misc-container .sub-container').fadeIn(500);
        $('.misc-container .sixth-container').fadeIn(500);
    });
    $('.misc-container .sixth-container .fa-times').click(function () {
        $('.misc-container .sixth-container').fadeOut(500);
    });

    // Misc Sub Container #07
    $('.misc-container .link07').click(function () {
        $('.misc-container .sub-container').fadeIn(500);
        $('.misc-container .seventh-container').fadeIn(500);
    });
    $('.misc-container .seventh-container .fa-times').click(function () {
        $('.misc-container .seventh-container').fadeOut(500);
    });

    // Misc Sub Container #08
    $('.misc-container .link08').click(function () {
        $('.misc-container .sub-container').fadeIn(500);
        $('.misc-container .eighth-container').fadeIn(500);
    });
    $('.misc-container .eighth-container .fa-times').click(function () {
        $('.misc-container .eighth-container').fadeOut(500);
    });

    // Misc Sub Container #09
    $('.misc-container .link09').click(function () {
        $('.misc-container .sub-container').fadeIn(500);
        $('.misc-container .ninth-container').fadeIn(500);
    });
    $('.misc-container .ninth-container .fa-times').click(function () {
        $('.misc-container .ninth-container').fadeOut(500);
    });

    // ******************************************************************************** //

    $('.lipid-icon').click(function () {
        $('#content-container').fadeIn(500);
        $('.lipid-container').fadeIn(500);
    });

    $('.lipid-container .fa-home').click(function () {
        iconsAnimeFunc();
        $('#content-container').fadeOut(500);
        $('.lipid-container').fadeOut(500);
    });

    // Lipid Sub Container #01
    $('.lipid-container .link01').click(function () {
        $('.lipid-container .sub-container').fadeIn(500);
        $('.lipid-container .first-container').fadeIn(500);
    });
    $('.lipid-container .first-container .fa-times').click(function () {
        $('.lipid-container .first-container').fadeOut(500);
    });

    // ******************************************************************************** //

    $('.eye-icon').click(function () {
        $('#content-container').fadeIn(500);
        $('.eye-container').fadeIn(500);
    });

    $('.eye-container .fa-home').click(function () {
        iconsAnimeFunc();
        $('#content-container').fadeOut(500);
        $('.eye-container').fadeOut(500);
    });

    // Eye Sub Container #01
    $('.eye-container .link01').click(function () {
        $('.eye-container .sub-container').fadeIn(500);
        $('.eye-container .first-container').fadeIn(500);
    });
    $('.eye-container .first-container .fa-times').click(function () {
        $('.eye-container .first-container').fadeOut(500);
    });

    // ******************************************************************************** //

    $('.nightmare-icon').click(function () {
        $('#content-container').fadeIn(500);
        $('.nightmare-container').fadeIn(500);
    });

    $('.nightmare-container .fa-home').click(function () {
        iconsAnimeFunc();
        $('#content-container').fadeOut(500);
        $('.nightmare-container').fadeOut(500);
    });

    // Nightmare Sub Container #01
    $('.nightmare-container .link01').click(function () {
        $('.nightmare-container .sub-container').fadeIn(500);
        $('.nightmare-container .first-container').fadeIn(500);
    });
    $('.nightmare-container .first-container .fa-times').click(function () {
        $('.nightmare-container .first-container').fadeOut(500);
    });

    // ******************************************************************************** //

    $('.jnc-icon').click(function () {
        $('#content-container').fadeIn(500);
        $('.jnc-container').fadeIn(500);
    });

    $('.jnc-container .fa-home').click(function () {
        iconsAnimeFunc();
        $('#content-container').fadeOut(500);
        $('.jnc-container').fadeOut(500);
    });

    // Nightmare Sub Container #01
    $('.jnc-container .link01').click(function () {
        $('.jnc-container .sub-container').fadeIn(500);
        $('.jnc-container .first-container').fadeIn(500);
    });
    $('.jnc-container .first-container .fa-times').click(function () {
        $('.jnc-container .first-container').fadeOut(500);
    });

    // ******************************************************************************** //

    $('.ascot-claims-icon').click(function () {
        $('#content-container').fadeIn(500);
        $('.ascot-container').fadeIn(500);
    });

    $('.ascot-container .fa-home').click(function () {
        iconsAnimeFunc();
        $('#content-container').fadeOut(500);
        $('.ascot-container').fadeOut(500);
    });

    // Ascot Sub Container #01
    $('.ascot-container .link01').click(function () {
        $('.ascot-container .sub-container').fadeIn(500);
        $('.ascot-container .first-container').fadeIn(500);
    });
    $('.ascot-container .first-container .fa-times').click(function () {
        $('.ascot-container .first-container').fadeOut(500);
    });

    // ******************************************************************************** //

    $('.diabetic-icon').click(function () {
        $('#content-container').fadeIn(500);
        $('.diabetic-container').fadeIn(500);
    });

    $('.diabetic-container .fa-home').click(function () {
        iconsAnimeFunc();
        $('#content-container').fadeOut(500);
        $('.diabetic-container').fadeOut(500);
    });

    // Diabetic Sub Container #01
    $('.diabetic-container .link01').click(function () {
        $('.diabetic-container .sub-container').fadeIn(500);
        $('.diabetic-container .first-container').fadeIn(500);
    });
    $('.diabetic-container .first-container .fa-times').click(function () {
        $('.diabetic-container .first-container').fadeOut(500);
    });

    // Diabetic Sub Container #02
    $('.diabetic-container .link02').click(function () {
        $('.diabetic-container .sub-container').fadeIn(500);
        $('.diabetic-container .second-container').fadeIn(500);
    });
    $('.diabetic-container .second-container .fa-times').click(function () {
        $('.diabetic-container .second-container').fadeOut(500);
    });

    // Diabetic Sub Container #03
    $('.diabetic-container .link03').click(function () {
        $('.diabetic-container .sub-container').fadeIn(500);
        $('.diabetic-container .third-container').fadeIn(500);
    });
    $('.diabetic-container .third-container .fa-times').click(function () {
        $('.diabetic-container .third-container').fadeOut(500);
    });

    // ******************************************************************************** //

});