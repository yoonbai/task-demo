const URL_PREFIX            = 'https://yoonresources.s3.amazonaws.com/objectomes_vignetted/';
const URL_VIDEO_PREFIX      = 'https://yoonresources.s3.amazonaws.com/videos/';
const URL_FACES_PREFIX      = 'https://yoonresources.s3.amazonaws.com/faces_vignetted/';
const URL_PREFIX_CATCH      = 'https://yoonresources.s3.amazonaws.com/objectomes_vignetted/img/';
const URL_SUFFIX            = '.png';


/* Constants */
const TEST_TRIAL_DURATION   = 500;
const STIM_DURATION_MS      = 100;
const SIZES                 = [0.5, 1, 2];  

const FRAME_DUR_MS          = 17; 
const NUM_VIDEO_FRAMES      = 20;


// object ID's
const A                     = 0; 
const B                     = 1; 
const C                     = 2; // control 
const D                     = 3; // control 

const IMG_SIZE_PX           = 300; // re-using Xiaoxuan's convention

// 200 trials total 
//  - 50 trials/object x 4 objects
//      - 50 = 15 small + 15 large + 20 cover trials
const NUM_TESTS_SMALL       = 15;
const NUM_TESTS_LARGE       = 15;
const NUM_COVERS            = 20;

const MTURK_SUBMISSION_URL_SANDBOX      = 'https://workersandbox.mturk.com/mturk/externalSubmit';
const MTURK_SUBMISSION_URL              = 'https://www.mturk.com/mturk/externalSubmit';

const WELCOME_TEXT      = [
                '<font size="+2"><strong>Thank you for your time!</strong><br> You are contributing to an ongoing research at the Massachusetts Institute of Technology</font>\
                <ul> \
                    <li><p style="text-align: left;">We will show an image of a face on a background.</li> \
                    <li><p style="text-align: left;">Afterwards, there will be two faces to choose from.</li> \
                    <li><p style="text-align: left;"><b>Your task is to choose the face you saw previously.</b>.</li> \
                    <li><p style="text-align: left;">We will provide a bonus payment if you choose the correct object more than 60% throughout the HIT.</li> \
                    <li><p style="text-align: left;">Your bonus increases with your performance (once above 60% correct).</li> \
                    <li><p style="text-align: left;">Random guessing will lead to no bonus and we will end the task prematurely.</li> \
                    <li><p style="text-align: left;">The HIT takes around 1 HOUR to complete. </li> \
                    <li><p style="text-align: left;">You may return the HIT if you feel uncomfortable during the HIT. You will not be penalized in any way. </li> \
                    <li><p style="text-align: left;">If you do not feel uncomfortable to proceed, please do not accept this HIT.</li> \
                    <li><p style="text-align: left;">Recommended browsers: Chrome or Safari</li> \
                </ul>',

                '<p style="text-align: center;">Please press the <b>Next</b> button if you are ready to start</p>'
                ];

const WARMUP_TEXT = [
                '<ul> \
                <b><font color=#9e1316>First, let\'s go through some practice trials</font></b> \
                <li><p style="text-align: left;"> In the next screen, please look at the black cross. </li> \
                <li><p style="text-align: left;"> The cross will disappear and you will see an image for a short period. </li> \
                <li><p style="text-align: left;"> Next, we will present two faces to choose from.</li> \
                <li><p style="text-align: left;"><b>YOUR TASK</b> is to click one of the two faces you saw previously.</li> \
                <li><p style="text-align: left;"> We will let you know if you chose the correct answer. </li> \
                <li><p style="text-align: left;"> Please press the <b>Next</b> button if you are ready. </li>\
                </ul>'];

const PRESCREENING_TEXT = [
                '<ul> \
                <b><font color=#9e1316>Now, we will speed things up and see if the experiment suites you well</font></b> \
                <li><p style="text-align: left;"> Your task is same as before.</li> \
                <li><p style="text-align: left;"> However, the image will disappear much faster.</li> \
                <li><p style="text-align: left;"> Please press the <b>Next</b> button if you are ready. </li>\
                <p><font color=#9e1316>Warning: HIT will abort if your choices are below 70% correct.</p>\
                </ul>'];


const TEST_BLOCK_INSTRUCTIONS = [
            '<ul> \
                <b><font color=#008000>We will continue with your HIT.</font></b> \
                <li><p style="text-align: left;"> The task is the same as you\'ve practiced before.</li> \
                <li><p style="text-align: left;"> Warning: HIT will abort if your choices are below 55% correct.</li> \
                <li><p style="text-align: left;"> Please press the <b>Next</b> button if you are ready. </li>\
            </ul>'
                ];

const EXPOSURE_BLOCK_INSTRUCTIONS = [
            '<ul> \
                <b><font color=#9e1316>Warning: new instructions!</font></b> \
                <li><p style="text-align: left;">From now on, your task is to <b>look at the cross sign and click on it.</b> \
                <li><p style="text-align: left;">Once you click the cross, some images will flash and the cross will re-appear at a new location. </li> \
                <li><p style="text-align: left;"> There is always a cross. If you do not see the cross, scroll the screen up/down.</li> \
                <li><p style="text-align: left;"> You will go through this process many times for about 20-30 minutes</li> \
            </ul>', 

            '<ul> \
                <li><p style="text-align: left;"> You will see new instructions once you finish this stage. </li> \
                <li><p style="text-align: left;"> This stage will begin immediately once you click <b>Next</b>. \
                <li><p style="text-align: left;"> Please press the <b>Next</b> button if you are ready. </li>\
            </ul>'
                ];
const EXIT_INSTRUCTION = [
            '<ul> \
                <li><p style="text-align: left;"> Please press the <b>Next</b> button to exit the HIT. </li> \
            </ul>'
                ];
const LAST_TEST_BLOCK_INSTRUCTIONS = [
        '<ul> \
            <li><p style="text-align: left;"> For this stage, we will go back to the task you performed at the beginning. </li> \
        </ul>', 

        '<ul> \
            <li><p style="text-align: left;"> The task is the same as you\'ve practiced before.</li> \
            <li><p style="text-align: left;"> Warning: HIT will abort if your choices are below 55% correct.</li> \
            <li><p style="text-align: left;"> Please press the <b>Next</b> button if you are ready. </li>\
        </ul>'
            ];
