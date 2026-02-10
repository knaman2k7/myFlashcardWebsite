// boolean for showing answer or question
var isTextQuestion = true;

// question number from json
var qnumber = 1;

// string showing which paper the questions are coming from
var curPaper = "paper1";

// random list of numbers used to traverse the random mode
var randomList = [];

// pointer used for the randomlist index
var RandCounter = 0;

// boolean to show if the traversing method is random or ordered
var TraversalMethod = "order";

// dictionary used to control the mechanism for shifting questions with buttons
let keysPressed = {};

// data on questions being wrong and right
// in the form [questionNumber, number of times wrong, number of times right]
let questionDataP1 = 
[
     // section 1
     [[2,1,0], [16,1,0], [21,1,0], [22,1,0], [23,1,0], [27,1,0], [35,1,0], [36,1,0], [37,1,0], [39,1,0]],
     // section 2
     [[1,1,0], [2,1,0], [4,1,0], [5,1,0], [6,1,0], [7,1,0], [8,1,0], [9,0,1], [10,1,0], [11,1,1], [12,0,1], [13,1,0], [14,1,0], [16,1,0], [17,0,1], [18,0,1], [19,2,0], [20,1,0], [21,1,0], [22,0,1], [23,1,0], [24,2,0], [25,2,0], [26,2,0], [29,1,0], [30,1,0], [31,1,0], [45,1,0], [46,1,0], [47,1,0], [49,1,0], [51,1,0]],
     // section 3
     [[1,1,0], [15,1,0], [31,1,0]],
     // section 4
[[4,1,0], [9,1,0], [11,2,0], [13,1,0], [14,1,0], [15,1,0], [19,2,0], [22,1,0], [26,1,0], [28,1,0], [29,2,0], [30,2,0], [31,1,0], [32,1,0], [33,1,0], [34,1,0], [35,1,0], [38,1,0], [41,1,0], [43,1,0], [44,1,0], [45,1,0], [46,1,0], [47,1,0], [49,1,0], [50,1,0], [51,1,0], [52,1,0], [53,1,0], [54,1,0], [55,1,0], [57,1,0], [58,1,0], [1,0,1], [2,0,1]],
     // section 5
     [ ],
     // section 6
     [ ],
     // section 7
     [ ],
     // section 8
     [ ],
     // section 9
     [ ]
];

let questionDataP2 = 
[
     // section 1
     [[1,1,0], [2,1,0], [3,1,0], [4,1,0], [5,1,0], [7,1,0], [10,1,0], [11,1,0], [14,1,0]],
     // section 2
     [],
     // section 3
     [ ]
];

let currentSectionNumber = 1;

var cards =
{
    "paper1": {

     "section1":{

'1': {
     'q':"what are the 4 main components of the cpu",
     'a':"- control unit \n - alu \n - busses \n - registers" 
     }, 
'2': {
     'q':"what is the role of the control unit",
     'a':"- controls and coordinates the activities of the cpu \n - directs the flow of data between cpu and other components through control signals along the control bus \n - decodes instructions \n - controls busses" 
     }, 
'3': {
     'q':"name the 3 busses",
     'a':"- data bus \n - address bus \n - control bus" 
     }, 
'4': {
     'q':"what is the role of the data bus",
     'a':"- a bi-directional bus \n - carries data between cpu and components" 
     }, 
'5': {
     'q':"what is the role of the address bus",
     'a':"- a uni directional bus \n - cpu sends an address to memory via this bus" 
     }, 
'6': {
     'q':"what is the role of the control bus",
     'a':"- a bi-directional bus \n - controls unit and other components send signals along this bus for requests to access other 2 busses" 
     }, 
'7': {
     'q':"what is the role of the ALU",
     'a':"boolean and arithmetic operations" 
     }, 
'8': {
     'q':"name all the registors",
     'a':"- Accumulator \n - Program Counter \n - Memory Address Register \n - Memory data register \n - current instruction register" 
     }, 
'9': {
     'q':"what is the role of the accumulator",
     'a':"- temporary storage for data being processed \n - holds all inputs / outputs as gateway or buffer" 
     },
'10': {
     'q':"what is the role of the Program Counter",
     'a':"- holds the address of the next instruction to be executed" 
     }, 
'11': {
     'q':"what is the role of the memory address register",
     'a':"holds the address of a location that is to be read or written to" 
     }, 
'12': {
     'q':"what is the role of the memory data register",
     'a':"-to temporarily store data that has been read \n or \n -data needs to be written to a memory location" 
     }, 
'13': {
     'q':"what is the role of the CIR",
     'a':"to hold the current instruction which is being executed, divided into operand and opcode" 
     },
'14': {
     'q':"Remember the FDE cycle",
     'a':"-program counter starts at 0 \n - PC is copied into MAR \n - then PC++" 
     }, 
'15': {
     'q':"what are the factors affecting CPU speed",
     'a':"- clock speed \n - number of cores \n - use of pipelining \n - type and size of cache" 
     }, 
'16': {
     'q':"what is clock speed",
     'a':"- the frequency at which CPU executes instructions" 
     }, 
'17': {
     'q':"what is cache",
     'a':"a small and fast memory located on or close to the cpu to store frequently accessed instructions or data to speed up processing" 
     }, 
'18': {
     'q':"what is pipelinig",
     'a':"- one instruction can be fetched while another is being decoded and another is executed \n - the output of one process is the input of the next \n - concurrent processing of multiple instruction \n - mostly prevelant in personal computers" 
     }, 
'19': {
     'q':"what are features of the Von-Nuemann architecture",
     'a':"- uses the FDE cycle \n - instructions and data are held in the same main one memory \n - single control unit" 
     }, 
'20': {
     'q':"what are the features of the Havard architecture",
     'a':"- physically separate memories for instructions and data \n - different busses used for instructions and data \n - commonly used with embedded processors \n (instructions are read-only, which stops any threats, and data can be dynamic making the computer more effecient) \n - often used for real time purposes" 
     }, 
'21': {
     'q':"what are the advantages of Von-Nuemann",
     'a':"- cheaper to develop as control unit is easier to design \n - programs can be optimised in size" 
     }, 
'22': {
     'q':"what are the advantages of havard architecture",
     'a':"- quicker execution as data and instructions can be fetched parallel \n - memories can be very different sizes, which can make more efficient use of space " 
     }, 
'23': {
     'q':"which type of architecture do modern processors have?",
     'a':"-typically both \n - main memory is von-nuemann \n -cache is havard" 
     }, 
'24': {
     'q':"What is RISC",
     'a':"- small instruction set \n - each instruction is equivelent to one line of machine code and takes one clock cycle to complete" 
     }, 
'25': {
     'q':"what is CISC",
     'a':"- large instruction set \n - a instruction is compromised of multiple machine instructions \n - aim is to try and accomplish tasks in as few lines as possible \n - typically used in embedded systems and microcontrollers" 
     }, 
'26': {
     'q':"which type of processors are used nowadays",
     'a':"risc" 
     },
'27': {
     'q':"how do RISC and CISC compare",
     'a':"- cisc is easier on compilers \n - cisc is less power effecient \n - cisc requires less ram\n - many specalised instructions are made in cisc but only a few are used \n- cisc does not allow for pipelining \n-cisc runs slower as instructions are more complicated(vice versa for risc) \n -cisc is more expensive as it has more expensive circuitary" 
     }, 
'28': {
     'q':"what is a co-processor",
     'a':"- extra processor to help the main processor \n - used for stuff like floating point arithmetic, graphics processing (GPU)" 
     }, 
'29': {
     'q':"what is a GPU",
     'a':"- type of co-processor \n - responsible for enhancing computer graphics \n - allows for vector and matrices calculations quickly \n - composition of thousands of small cores lined up parallel and process visual data concurrently \n - good for repetitive tasks" 
     }, 
'30': {
     'q':"what is a multicore processor",
     'a':"- multiple independent cores that can complete instructions separately at the same time \n - workload is able to be distributed \n - most personal mobiles and computers have multicore systems \n - however some software are not able to take full advantage of it" 
     }, 
'31': {
     'q':"what is a parallel system",
     'a':"- one core used with multithreading can accomplish similar task" 
     }, 
'32': {
     'q':"what is an input device",
     'a':"- a device which can be used to put data into a computer" 
     }, 
'33': {
     'q':"what is an output device",
     'a':"- a device which can be used to send data from the computer " 
     }, 
'34': {
     'q':"what is optical storage",
     'a':"- data storage which is read and written using lasers on reflective surfaces \n - binary is represented by areas which scatter or reflect light \n - lands(1) ; pits(0)" 
     }, 
'35': {
     'q':"Describe CDs",
     'a':"- compact disk \n - can store small quantities of data \n - most commonly audio files \n - easily damaged by scratches" 
     }, 
'36': {
     'q':"describe DVDs and Blu-ray",
     'a':"- DVDs can store more data than CDs \n -DVDs have a faster access speed \n - Blu-ray has 5x more storage space than CDs" 
     }, 
'37': {
     'q':"Describe magnetic storage",
     'a':"- Stores information magnetically \n - un/polarised form of the parts of the material represent binary \n - Hard disk drive HDD \n (-rotating platters with an arm \n - 500gb to 5tb \n - slow data transfer \n - easily damaged by movement due to fragile parts) \n - other types of magnetic storage include magnetic tape and floppy disks(1mb size)" 
     }, 
'38': {
     'q':"describe flash memory",
     'a':"- uses NAND gates to store electrical charge in two states (high or low: representing binary) \n - more expensive but better performance" 
     }, 
'39': {
     'q':"describe the features of SSDs",
     'a':"- light and portable \n - resistant to damage \n - high data transfer rate \n - more expensive \n - limited lifespan" 
     }, 
'40': {
     'q':"what is primary storage and describe it further",
     'a':"- main memory of a computer \n - RAM / ROM / Cache \n - volatile (loses data when power goes off) \n - provides fast access" 
     }, 
'41': {
     'q':"what is secondary storage",
     'a':"- long term memory of a computer \n - SSD/HDD/DVD \n - non volatile ( doesn't lose data when power goes off) \n - slower access" 
     },
'42': {
     'q':"Describe RAM",
     'a':"- Fast main memory \n - used to store data and program the computer is currently running \n - typically volatile, losses data when power is switched off" 
     }, 
'43': {
     'q':"describe ROM",
     'a':"- cannot be modified \n - quicker to open up \n - cheaper \n - once programmed, cannot be changed \n - used for storing fixed sequences of instructions (computer's bootstrap) \n - non-volatile" 
     }, 
'44': {
     'q':"what is virtual storage and its disadvantages",
     'a':"- storage like cloud \n - disadvantages :  \n (- depeneds on user's network access and speed \n -high costs)" 
     }, 
'45': {
     'q':"what is virtual memory",
     'a':"- the computer uses the secondary storage as a temporary memory when memory is being fully used up" 
     }
     },
     "section2":{
'1': {
     'q':"what is an operating system",
     'a':"- collection of programs that work together to provide an interface between user and the computer \n - hide the complexities of the hardware and show the user an easy interface to use the computer" 
     }, 
'2': {
     'q':"list all the roles of the operating systems(8)",
     'a':"- memory management \n - provides a user interface \n - provides system security \n - manage hardware/peripherals \n - provides a platform for software to be run on \n - schedule jobs \n - file management \n - handle interrupts" 
     }, 
'3': {
     'q':"what are two types of memory management",
     'a':"- paging \n - segmentation" 
     }, 
'4': {
     'q':"what is memory management",
     'a':" - one of the roles of the operating system is to ensure the main memory is shared efficiently between programs through the use of paging, segmentation and virtual memory" 
     }, 
'5': {
     'q':"what is paging",
     'a':"- memory is split into equal sized sections known as pages \n - pages are swapped between main memory and hard disk to access parts and wholes of programs \n - a program can be held in non-contiguous memory locations" 
     }, 
'6': {
     'q':"what is segmentation",
     'a':"- memory is split up into logical divisions \n - segments vary in size \n - segments represent the structure and logical flow of the program" 
     }, 
'7': {
     'q':"what is virtual memory",
     'a':"- part of the computer's HDD is used as memory when main memory is full \n - key issue is computer freezes when swapping pages from memory to HDD ( disk thrashing ) \n - uses paging" 
     }, 
'8': {
     'q':"what are interupts",
     'a':"- signals generated by software or hardware to indicate to the processor that a process needs attention \n - control signal is sent to cpu \n - interrupts have different priorities \n - stored in a priority queue" 
     },
'9': {
     'q':"what is the routine for calling an interrupt service routine",
     'a':"- processor checks after each FDE cycle for interrupts \n - if high priority interrupt comes up \n (- contents of the registers in the cpu are copied into RAM \n - the cpu responds by loading the appropriate interupt service routine into the RAM \n - Flag is set to signal ISR has begun)" 
     },
'10': {
     'q':"what are the 5 scheduling algorithms",
     'a':"- Round Robin \n - Fist in First Out (FIFO) \n - Shortest job first \n - Shortest time remaining \n - Multilevel Feedback Queue" 
     }, 
'11': {
     'q':"in terms of scheduling, what is the role of the OS",
     'a':"- to ensure all sections of programs receive a fair amount of processing time" 
     }, 
'12': {
     'q':"what does pre-emptive mean",
     'a':"- jobs are made to stop and start actively" 
     },
'13': {
     'q':"what is round robin \n what are the disadvantages of round robin",
     'a':"- each job is given a time slice (quantum) \n - if the job is not finished in that time, next job is given processor time and granted another time slice later on \n - each job is attended to until its finished and removed from the queue \n - does not take into consideration job priority \n - longer jobs will take a longer time for completetion" 
     },
'14': {
     'q':"Describe the first-in-first-out scheduling algorithm \n what are the dis/advantages",
     'a':"- jobs are processed in the order they come \n - easy to implement \n - does not take into account job priority" 
     }, 
'15': {
     'q':"describe shortest job first scheduling algorithm \n what are the disadvantages",
     'a':"- queue storing jobs with the shortest to longest times \n - jobs with shortest time are finished first \n - suited to batch systems ( a bunch of jobs you give off to the computer) \n - requires processor to estimate time of each job \n - does not take into account job priority \n - NON-PREMPTIVE (processor allocation decided only after a job is finished " 
     },
'16': {
     'q':"describe shortest time remaining scheduling algorithm \n what are the disadvantages",
     'a':"- ordered in time left to completion \n - does not take into account job priority \n - pre-emptive - a job might be in the middle of processing, but if a new job pops up with a shorter time, the processor will stop and start doing the new job" 
     }, 
'17': {
     'q':"describe multilevel feedback queue \n and given an example",
     'a':"- uses an algorithm which runs to dynamically place jobs in a queue \n - these are based on job priority, time remaining, other factors \n - since input/output devices are slower, processor can process their jobs first and then get on with everything else \n - ie. give printer all it's data, rather than sending one print, doing another task, which means the processor might need to wait, then sending a print" 
     }, 
'18': {
     'q':"what are all the types of operating systems (DR.EMM)",
     'a':"- Distributed \n - real time \n - Embedded \n - multi-tasking \n - multi-user" 
     }, 
'19': {
     'q':"what is the distributed OS",
     'a':"- tasks are distributed \n - run on multiple devices \n - load of a task is dispersed" 
     }, 
'20': {
     'q':"describe the embedded OS",
     'a':"- system software used to manage devices  \n - in-built in the device \n - specfic to hardware \n - used in specfic devices (ie. washing machines, traffic lights) \n - limited functionality \n - consume less power \n - less memory, cheaper \n - ROM based" 
     }, 
'21': {
     'q':"describe multi-tasking OS",
     'a':"- multiple tasks done at once seamlessly \n - allows jobs to be done seemingly simultaneously through time slices given to each job (round robin)" 
     }, 
'22': {
     'q':"describe multi-user OS",
     'a':"- multiple terminals connecting to one main processor \n - each terminal is allocated processor time fairly through scheduling algorithms" 
     }, 
'23': {
     'q':"describe real time OS",
     'a':"- used in time-critical computer systems \n - designed to perform a task in a guaranteed time frame \n - requires fail-safe features \n - incorporate redundancy \n ( - rapidly switches to different hardware) \n - eg. self-driving cars, nuclear power station rod controller, aeroplanes" 
     },
'24': {
     'q':"what is BIOS",
     'a':"- Basic Input Output System \n - first program that runs when a computer system is switched on \n - runs a series of tests \n - POST \n (- power-on self test \n - ensures all hardware is correctly connected and functional) \n - checks CPU clock, memory, processor \n - loads the operating system into memory" 
     }, 
'25': {
     'q':"what are device drivers",
     'a':"- computer programs which allows external hardware to interact with the operating system \n - specific to computer's architecture \n - specific to operating systems" 
     }, 
'26': {
     'q':"what are virtual machines",
     'a':"- a theoretical computer and a software implementation of a computer system \n - provides an environment with a translator for immediate code to run \n (- JVM \n - running Linux on windows) \n - Uses of VM's \n (- testing programs \n - protection from malware \n - running software compatible with different OS's) \n - source code of the program is compiled into the bytecode/intermediate code" 
     }, 
'27': {
     'q':"what are the two classifications of a software",
     'a':"- application \n -systems" 
     }, 
'28': {
     'q':"what are application software",
     'a':"- software used by the end user \n - perform one specific task \n - eg. chrome, spotify, word, photoshop..." 
     }, 
'29': {
     'q':"what are system software",
     'a':"- manages computer resources \n - ensure high performance \n - provides a platform for application software to run on \n - user doesn't typically with system software, normally runs in the back \n - eg. OS, device drivers, utility programs" 
     }, 
'30': {
     'q':"what are utility programs",
     'a':"- a program with one purpose \n - maintenance of operating system" 
     }, 
'31': {
     'q':"name all the 5 utility programs in the spec",
     'a':"- compression software \n - disk defragmentater \n - anti-virus \n - automatic updating \n - automatic back up" 
     }, 
'32': {
     'q':"what is compression software and disk defragmentation",
     'a':"- compression: operating systems provide utilities that enable files to compress and decompress; used when compressing large files to be transmitted across the internet \n - disk defragmentation: sorts out the hard drive such that program files are next to each other, easier to read and write" 
     }, 
'33': {
     'q':"what is anti-virus and automatic updating",
     'a':"- anti-virus: detects and prevents potential threats \n - automatic updating: ensures OS is kept up to date with any updates being automatically installed when the computer is restarted; updates to tackle bugs or security flaws" 
     }, 
'34': {
     'q':"what is automatic backup",
     'a':"- backup utility automatically creates routine copies of specific files selected by the user \n - allows in the event of a power failure or any other accident, files can be recovered" 
     },
'35': {
     'q':"what is source code and object code",
     'a':"- source code : code written by developer \n - object code : code that the source code has been compiled to" 
     }, 
'36': {
     'q':"what is open source software",
     'a':"- software which the source code is available to the public" 
     }, 
'37': {
     'q':"what is closed source software",
     'a':"- users do not have access to the source code only the compiled \n - not necessarily paid software ( as you can pay for open source software and get the actual source code) \n - close source typically requires a licence" 
     }, 
'38': {
     'q':"what are the advantages of open source software",
     'a':"- freely available to amend and redistribute \n - can be modified by anyone \n - community effort to improve it \n - can be further sold on" 
     }, 
'39': {
     'q':"what are the advantages of closed source software",
     'a':"- licensing conditions restricting distribution \n - well tested and regular updates \n - provides expert support \n - high level of security as made professionally" 
     }, 
'40': {
     'q':"what are translators, and what ones are there",
     'a':"- translators convert source code into object code (machine code) \n - interpreter \n - compiler \n - assembler" 
     }, 
'41': {
     'q':"what is an interpreter",
     'a':"- translates and executes code line by line \n - only reports error if a line that is being executed has an error \n - running the code through interpretation can be time-challenging \n - right interpreter has to be available to interpret code on different devices" 
     }, 
'42': {
     'q':"what is a compiler",
     'a':"- converts high level code to machine code all at once \n - checks for errors and reports back \n - takes longer than other translators \n - compiled code is run fast \n - compiled code is specific for the device it's being run on \n - compiled code can be run without a translator present \n - source code has to be recompiled for any changes" 
     }, 
'43': {
     'q':"what is an assembler",
     'a':"- assemblers translate assembly code into machine code \n - 1 assembly code is almost equivalent to one machine code" 
     },
'44': {
     'q':"what are the four stages of compilation",
     'a':"- lexical analysis \n - syntax analysis \n - code generation \n - optimisation" 
     }, 
'45': {
     'q':"what is lexical analysis",
     'a':"- extra spaces and comments are removed \n - keywords and identifiers are replaced with tokens \n - information about tokens is stored in a symbol table" 
     }, 
'46': {
     'q':"what is syntax analysis",
     'a':"- tokens analysed against rules of the programming language \n - syntax errors flagged up if any rules broken \n - errors include \n (- undeclared variable type \n - incomplete set of brackets) \n - abstract syntax tree created \n (- representation of source code in form of a tree) \n - semantic analysis is done \n (- logic mistakes within the program are detected \n eg. multiple declarations, undeclared identifiers)" 
     }, 
'47': {
     'q':"what is code generation and optimisation",
     'a':"- code generation : abstract syntax tree is used to produce machine code \n - optimisation : aims to reduce execution time; time consuming stage; redundant parts of code removed" 
     }, 
'48': {
     'q':"what are linkers",
     'a':"- software that links external modules and libraries included within the code \n " 
     }, 
'49': {
     'q':"what are the 2 types of linkers, and describe them",
     'a':"- static : module/library code is copied directly into file \n - dynamic : address of modules/libraries are referenced; external updates are automatically fed through as it references the directory" 
     }, 
'50': {
     'q':"what are loaders",
     'a':"- provided by OS \n - fetches the library/module from given memory location" 
     }, 
'51': {
     'q':"what are libraries",
     'a':"- pre-compiled programs which can be incorporated within other programs \n - error-free \n - saves time, from not 'reinventing the wheel' \n - can be reused" 
     }
     },
     "section3":{
'1': {
     'q':"what are the 4 types of testing and describe them",
     'a':"- Alpha testing \n -- tested by developers \n - beta testing \n -- beta version is released for end users \n -- feedback from them is used to update and fix code \n - black box testing \n -- testers are unaware of internal structures (end users) \n - white box testing \n -- all possible routes through the programme are tested" 
     }, 
'2': {
     'q':"what are the 5 software development cycles",
     'a':"- waterfall \n - agile \n - extreme programming \n - rapid application \n - spiral" 
     }, 
'3': {
     'q':"describe the waterfall development cycle",
     'a':"- done in clear separate stages [analysis -> design...] \n - clear structure \n - to make a change, programmer must revisit all stages between \n - low user involvement" 
     }, 
'4': {
     'q':"describe the agile methodology",
     'a':"- collection of methodologies \n - easier to make improvements \n - prototypes are built in iterative stages until final product is made \n - focus is on the user-feedback \n - different sections of the programme can be built concurrently" 
     }, 
'5': {
     'q':"describe extreme programming",
     'a':"- agile model \n - development team is a pair of programmers and a end-user \n - produces high-quality code \n - hard to produce high-quality documentation \n - emphasis on teamwork" 
     }, 
'6': {
     'q':"describe rapid application methodology",
     'a':"- iterative methodology, which uses partially functioning prototypes \n - incomplete version of the solution is given to end user for trial \n - user feedback used to generate next prototype \n - used when user requirements are incomplete" 
     }, 
'7': {
     'q':"describe spiral methodology",
     'a':"- used for risk-heavy projects \n - 4 key stages \n -- analysis \n -- risk assessment \n -- development \n -- evaluation \n - project is terminated is risk assessment fails \n - specialist risk assessors must be hired - expensive" 
     }, 
'8': {
     'q':"what are the merits, drawbacks and uses of waterfall",
     'a':"- merits \n -- straightforward to manage \n -- clearly documented \n  \n - drawbacks \n -- lack of flexibility \n -- no risk analysis \n -- limited user involvement \n  \n - uses  \n -- static, low risk projects \n -- which need little user input such as a piece of general-purpose software" 
     }, 
'9': {
     'q':"what are the merits, drawbacks and uses of Agile",
     'a':"-merits \n -- produces high-quality code \n -- flexible to changing requirements \n -- regular user input \n  \n -drawbacks \n -- poor documentation \n -- requires consistent interaction between user and programmer \n  \n -uses \n -- small to medium projects \n -- with unclear initial requirements" 
     }, 
'10': {
     'q':"what are the merits, drawbacks and uses of Extreme Programming",
     'a':"-merits \n -- produces high-quality code \n -- constant user involvement means high usability \n  \n -drawbacks \n -- high cost of two people working on one project \n -- teamwork is essential \n -- end-user may not be able to be present \n  \n -uses \n -- small to medium projects \n -- with unclear initial requirements requiring excellent usability" 
     }, 
'11': {
     'q':"what are the merits, drawbacks and uses of Spiral",
     'a':"-merits \n -- thorough risk-analysis and mitigation \n -- caters to changing user needs \n -- produces prototypes throughout \n  \n -drawbacks \n -- expensive to hire risk assessors \n -- lack of focus on code efficiency \n -- high costs due to constant prototyping \n  \n -uses \n -- large, risk-intensive projects \n -- with a high budget" 
     }, 
'12': {
     'q':"what are the merits, drawbacks and uses of Rapid Application Development",
     'a':"-merits \n -- caters to changing user requirements \n -- highly usable finished product \n -- focus on core features, reducing development time \n  \n -drawbacks \n -- poorer quality documentation \n -- fast pace may reduce code quality \n  \n -uses \n -- small to medium, low-budget projects \n -- with short time-frames" 
     },
'13': {
     'q':"What are the shapes for these things for flowcharts: \n - Terminal \n - Input/Output \n - Process \n - Subroutine \n - Decision",
     'a':"- Terminal -> rounded rectangle \n - Input/Output -> Parallelogram \n - Process -> rectangle \n - subroutine -> rectangle with 2 lines on the end(remove the bottom part) \n __________ \n | |     | | \n |-|-----|-| \n - Decision -> kite/rhombus" 
     }, 
'14': {
     'q':"what are imperative languages",
     'a':"- uses code that clearly specifies the action need to be performed" 
     }, 
'15': {
     'q':"what are the two classifications of imperative languages and their descriptions",
     'a':"- Procedural \n -- sequence of instructions \n -- step by step manner \n -- (like normal coding that comes to mind) \n  \n - object-oriented \n -- based on OOPS concept \n -- reusable components (making objects from class templates)" 
     }, 
'16': {
     'q':"what are declarative languages",
     'a':"- stating the desired outcome rather than the exact series of instructions \n - it is the role of the language to find the best way to achieve the result \n - two types: functional & logic" 
     }, 
'17': {
     'q':"what are the 4 procedural code programming constructs",
     'a':"- selection : a choice is made and a certain selection of code is or isn't executed \n - sequence : code is executed line by line \n - iteration : selection of code is repeated until a given result \n - recursion : calling a function inside itself until a base case is met" 
     }, 
'18': {
     'q':"describe assembly code",
     'a':"- assembly code is converted directly to machine code using an assembler \n - uses mnemonics rather than binary \n - each assembly language is processor specific \n - as it directly interacts with the CPU's special purpose register \n - each instruction is equivalent to one line of machine code" 
     }, 
'19': {
     'q':"what does HLT, DAT, BRP, BRA do in assembly",
     'a':"- HLT -> stops the program \n - DAT - creates a memory location for which data is stored \n - BRP -> branches if content in accumulator is +ve or 0 \n - BRA -> branches always" 
     }, 
'20': {
     'q':"what are the two components of a machine code",
     'a':"- opcode: instruction to be performed \n - operand: what to operate the instruction on (data/reference to memory location)" 
     },
'21': {
     'q':"what are the 4 types of addressing modes for the operand and how do they work",
     'a':"- immediate addressing : the actual data \n - direct addressing : gives the address of where the data is stored \n - indirect addressing : gives the address of a register which holds another address for where the data is held \n - indexed addressing : index register is used \n -- the address of the actual data = operand + index register (used for arrays and stuff)" 
     }, 
'22': {
     'q':"define a class",
     'a':"- template for objects \n - defines the state and behaviour of an object" 
     }, 
'23': {
     'q':"define an object",
     'a':"- a particular instance of a class" 
     }, 
'24': {
     'q':"define a setter",
     'a':"- methods you can call which allow you to set the value of a particular attribute" 
     }, 
'25': {
     'q':"define getters",
     'a':"- methods which you can call which retrieves a value of an attribute" 
     }, 
'26': {
     'q':"what is a constructor",
     'a':"- method used to create an instance of a class" 
     }, 
'27': {
     'q':"define encapsulation",
     'a':"- the bundling of data and methods in a class" 
     }, 
'28': {
     'q':"define inheritance",
     'a':"- the process in which a child class inherits all of the methods and attributes of the parent class \n - a child class can also have its own additional properties" 
     }, 
'29': {
     'q':"define polymorphism and how its achieved",
     'a':"- ability of objects to respond differently to the same function call depending on their class \n - two ways of achieving it \n  \n -- method overriding \n --- redefining a method so that it functions differently (calling a method the same name as in the parent class) \n  \n -- method overloading \n --- passing in different parameters into a method with the same name" 
     }, 
'30': {
     'q':"define abstraction in terms of OOPS",
     'a':"- process of simplifying a process by just calling its method and not worrying about the complexities behind it" 
     }, 
'31': {
     'q':"what are the advantages of OOPS",
     'a':"- high level of reusability \n - code made more reliable through encapsulation \n - makes code easy to maintain and update \n - classes can be reused as a black box which saves time and effort" 
     }, 
'32': {
     'q':"what are the disadvantages of oops",
     'a':"- requires an alternative style of thinking \n - not suited to all types of problems \n - generally unsuitable for smaller problems" 
     }


     },
     "section4":{

'1': {
     'q':"define compression",
     'a':"- process used to reduce the storage space required by a file" 
     }, 
'2': {
     'q':"what are the advantages of compression",
     'a':"- allows more file to be stored within the same storage space \n - allows files to be transferred over the internet quicker" 
     }, 
'3': {
     'q':"what are the two types of compression and describe them",
     'a':"- lossy \n -- some information is lost \n --- more pixelated images \n --- reduced audio quality \n  \n -lossless \n -- no information is lost" 
     }, 
'4': {
     'q':"what are the two types of lossless compression",
     'a':"- Run length encoding \n - dictionary encoding" 
     }, 
'5': {
     'q':"compress this using run length encoding: AAAMMLLLL",
     'a':"3A2M4L" 
     }, 
'6': {
     'q':"describe dictionary encoding",
     'a':"- frequently occurring data is put into a dictionary \n - these occurrences are replaced with indexes from the dictionary \n - the dictionary has to be sent along with the data" 
     }, 
'7': {
     'q':"what is the use of encryption",
     'a':"- used to keep data secure when its being transmitted" 
     }, 
'8': {
     'q':"what are the two types of encryption",
     'a':"- symmetrical encryption \n - asymmetrical encryption" 
     }, 
'9': {
     'q':"describe symmetric encryption",
     'a':"- both sender and receiver share the same private key \n - this key can be used to encrypt and decrypt the same data \n - extremely important the key is kept secret" 
     }, 
'10': {
     'q':"describe asymmetric encryption",
     'a':"- two different keys: public and private \n - public is shared to the public, private is kept safe \n - data is encrypted by the public key, and can only be decrypted by the private key" 
     }, 
'11': {
     'q':"what is hashing",
     'a':"- process in which a string of characters are transformed into a fixed size value (called a hash) \n - unlike encryption, the hash function cannot be reversed to get back the original key \n - especially great for passwords" 
     }, 
'12': {
     'q':"how would hashing work for a password",
     'a':"- the user creates an account, and the password they created is hashed into a new value \n - this new value is stored in the database \n - when the user tries to log into their account, their password is hashed again using the same algorithm, and then checked against the database \n - a potential hacker would only get access to the hashed value and maybe have the hashing algorithm, but cannot reverse engineer it to get the original password the user typed in in their device" 
     }, 
'13': {
     'q':"describe a hash table",
     'a':"- a data structure consisting of a key-value pair \n - hash tables can be used to look up in a constant time O(1) \n - a key is used as the input into a hash function, this returns an address which stores the data wanting to be retrieved \n  \n - if two keys provide the same hash value, it is called a collision \n -- store all the values hashed into the same place into a list, and use another hash function to retrieve the right data within that list \n -- or place it on the next one \n  \n - a good hash function \n -- low chance of collisions \n -- the output should be smaller than the input" 
     },
'14': {
     'q':"define an entity in a relational database",
     'a':"- an item of an interest which information is stored about" 
     }, 
'15': {
     'q':"define a relational database",
     'a':"- a database which recognises the differences between entities by creating different tables for each entity" 
     }, 
'16': {
     'q':"what are fields in a database",
     'a':"- the columns within a database" 
     }, 
'17': {
     'q':"what is a record in a database",
     'a':"- a row in the database" 
     }, 
'18': {
     'q':"define a flat file database",
     'a':"- database consisting of only one single file \n - based around a single entity and its attributes \n  \n - some uses \n -- storing contact details \n -- storing contact details" 
     }, 
'19': {
     'q':"what are attributes",
     'a':"- the characteristics of an entity" 
     }, 
'20': {
     'q':"define primary key",
     'a':"- a key which uniquely identifies each record in a table" 
     }, 
'21': {
     'q':"define foreign key",
     'a':"- creates a relationship between two tables by referencing a primary key from a different table" 
     }, 
'22': {
     'q':"define secondary key",
     'a':"- an alternate field which allows a useful way to retrieve data" 
     }, 
'23': {
     'q':"define composite key",
     'a':"- multiple fields which come together to form a primary key" 
     }, 
'24': {
     'q':"define candidate key",
     'a':"- possible primary key" 
     },
'25': {
     'q':"what are the three types of entity relationships",
     'a':"- one to one \n - many to one \n - many to many" 
     }, 
'26': {
     'q':"describe the one to one relationship",
     'a':"- each entity is linked to another entity \n - each record is linked to another individual record in another table \n - a foreign key value is referenced only once ( no repeats of a foreign key value within that field ) \n - eg husband to wife" 
     }, 
'27': {
     'q':"describe many to one relationship",
     'a':"- a entity is linked to multiple entities \n - a foreign key value is referenced multiple times within a field of a table \n - children to mother" 
     }, 
'28': {
     'q':"describe many to many relationship",
     'a':"- one entity can be associated with many other entities and the same applied the other way round \n -eg. students and courses" 
     },
'29': {
     'q':"what is normalisation",
     'a':"- process of coming up with the best possible layout for a relational database" 
     }, 
'30': {
     'q':"what is the aim of normalisation",
     'a':"- no redundancy ( unnecessary duplicates ) \n - consistent data \n - records can be added and removed without issues \n - complex queries can be carried out \n " 
     }, 
'31': {
     'q':"what are the requirements to be in 1NF",
     'a':"- no attributes should contain more than one value \n - all field names should be unique \n - values in fields should be from the same domain(shouldn't contain data that can be split up) \n - no two same records \n - each table needs a primary key " 
     }, 
'32': {
     'q':"what are the requirements for 2NF",
     'a':"- in 1NF \n - no partial dependencies (requires composite key to be true) \n -- partial dependency: one or more fields depend only on part of the composite key" 
     }, 
'33': {
     'q':"what are the requirements for 3NF",
     'a':"- is in 2NF \n - does not contain non-key dependencies \n -- non-key dependency: one or more fields depends on a non-primary key" 
     }, 
'34': {
     'q':"what is indexing and when is it used",
     'a':"- a method used to make data retrieval more efficient \n - done for fields which are often used to search criteria \n - you can also make fields indexed by making them secondary fields \n - primary keys are automatically indexed" 
     }, 
'35': {
     'q':"how does indexing work",
     'a':"- a separate data structure is created for that field \n - data value -> record number in that field \n - when a query is done, that data value is looked up, and it fetches the record number more quickly \n --it uses either a hash table or makes the data already sorted and then uses binary search \n -- rather then just going through each value in the table" 
     },
'36': {
     'q':"what are three forms of capturing data in the spec",
     'a':"- paper form \n - Optical Character Recognition (OCR) \n - Optical Mark recognition (OMR)" 
     }, 
'37': {
     'q':"what is Optical character recognition",
     'a':"- a machine reads writing based on the shape of the characters (translates visual data of writing into digital text files)" 
     }, 
'38': {
     'q':"what is optical mark recognition",
     'a':"- used for multiple choice \n - reads which box is marked and then stores the data" 
     }, 
'39': {
     'q':"what type of tools can be used to manage data",
     'a':"- SQL" 
     }, 
'40': {
     'q':"what are examples of technologies for the format of data to be exchanged in",
     'a':"- JSON \n -- lightweight data format which is compatible with many systems \n -- normally used for server and client \n  \n -CSV \n -- comma separated values \n -- data is separated by a comma" 
     },
'41': {
     'q':"what are actual methods of exchanging data",
     'a':"- manual \n -- send by email \n -- put on the cloud \n -- usb stick / CD \n  \n - automatic \n -- EDI - Electronic data interchange \n --- a protocol used to allow databases to talk to each other \n --- a school might open their system to already see student's result data from exam boards" 
     }, 
'42': {
     'q':"write an sql statement for getting age(Age) and class name(ClassName) about everyone whose first name(FirstName) is jay and second name is anything from a table called students(TStudents)",
     'a':"SELECT Age, ClassName FROM TStudents \n WHERE FirstName LIKE 'Jay %'" 
     }, 
'43': {
     'q':"write an SQL statement for retrieving data about the floor of a hotel room (Floor), last cleaned (LastCleaned) date for all rooms beginning with number(RoomName) 2xx, eg '207','281'... from table TRooms ",
     'a':"SELECT Floor, LastCleaned FROM TRooms \n WHERE RoomName LIKE '2_ _' \n " 
     }, 
'44': {
     'q':"create a new record in the table TCountries, for \n name='France', capital='paris', language='french', continent='europe'",
     'a':"INSERT INTO TCountries (name, capital, language, continent) \n VALUES('Franc', 'Paris', 'french', 'europe')" 
     }, 
'45': {
     'q':"write the sql for deleting a table called TStudents",
     'a':"DROP TABLE TStudents" 
     }, 
'46': {
     'q':"write sql for deleting a record whose name is france from a table TCountries",
     'a':"DELETE FROM TCountries \n WHERE name = 'France'" 
     }, 
'47': {
     'q':"write SQL to retrieve data from  \n TBorrows(BorrowerID, Name, BookID) and  \n TBook(BookID, BookName, BookGenre) \n  for a library. The data to be retrieved is the genre of the book and the name of the borrower.",
     'a':"SELECT TBorrows.Name, TBook.BookGenre \n FROM TBorrows \n Join TBook \n WHERE TBorrows.BookID = TBook.BookID" 
     },
'48': {
     'q':"what does DBMS stand for",
     'a':"Database management system" 
     }, 
'49': {
     'q':"what is referential integrity",
     'a':"- process of ensuring consistency \n - eg. if there are two tables which are linked, one of them cannot just be simply deleted as one of them relies on the other table" 
     }, 
'50': {
     'q':"what is a transaction",
     'a':"- an operation executed on data" 
     }, 
'51': {
     'q':"what is something important about a transaction",
     'a':"- each transaction must complete or fail as a complete unit \n - ie. sending money: \n Money should leave Account A, Money should be added to Account B \n not only one thing (as this would ruin integrity)" 
     }, 
'52': {
     'q':"what ACID stand for",
     'a':"- Atomicity \n - Consistency \n - Isolation \n - Durability" 
     }, 
'53': {
     'q':"what is Atomicity",
     'a':"- a change to a database must be fully complete or not at all" 
     }, 
'54': {
     'q':"what is consistency",
     'a':"- a transaction must maintain the referential integrity rules between linked tables \n - a transaction must retain the overall state of the database" 
     }, 
'55': {
     'q':"what is isolation",
     'a':"- a transaction must not be interrupted by another transaction \n - simultaneous executions of transactions should lead to the same result as if they were executed one after the other \n  \n - simultaneous transactions should not affect one another" 
     }, 
'56': {
     'q':"how does a DBMS enforce isolation",
     'a':"- record locking \n - the records being affected by a transaction are placed in a read only state until the original transaction is complete" 
     }, 
'57': {
     'q':"what is durability",
     'a':"- once a transaction has been executed, it will remain so regardless of the circumstances, such as a power cut \n - this is done by writing the effects of the transaction to a non-volatile storage immediately \n " 
     }, 
'58': {
     'q':"what is a deadlock",
     'a':"- when two transactions are put within a situation where each one is waiting for the other one, and due to record locking, everything is put to a stall (roughly)" 
     }, 
'59': {
     'q':"what is redundancy",
     'a':"- process of having multiple copies of data in physically different locations \n - this is done when data stored is too valuable to risk losing" 
     }

     },
     "section5":{
'1': {
     'q':"define network",
     'a':"- name given to two or more computers connected together with the ability to transmit data between each other" 
     }, 
'2': {
     'q':"what is a Local Area Network(LAN)",
     'a':"A network spread over a small geographical region (ie. school)" 
     }, 
'3': {
     'q':"what is a Wide Area Network",
     'a':"- a network spread over a large geographical region ( multinational corporation)" 
     }, 
'4': {
     'q':"define protocol",
     'a':"- a standard set of rules defining how two computers communicate with each other" 
     }, 
'5': {
     'q':"what is the need for protocols",
     'a':"- to allow all devices regardless of their manufactures to be able to communicate other devices \n " 
     }, 
'6': {
     'q':"what is HTTP/S",
     'a':"- Hypertext transfer protocol / Secure \n - used for web page rendering" 
     }, 
'7': {
     'q':"what is POP3 used for",
     'a':"emails" 
     }, 
'8': {
     'q':"what is FTP used for",
     'a':"- File transfer protocol \n - to send files over the internet" 
     }, 
'9': {
     'q':"what is TCP/IP used for",
     'a':"- networking protocol used in the routing of data packets" 
     }, 
'10': {
     'q':"define bandwidth",
     'a':"- maximum data that is able to be transmitted over a given time" 
     }, 
'11': {
     'q':"define latency",
     'a':"how long it takes the data to reach destination" 
     }, 
'12': {
     'q':"define the internet",
     'a':"a network of networks" 
     }, 
'13': {
     'q':"what is the TCP/IP stack",
     'a':"- stack of network protocols that work together passing packets during communication" 
     }, 
'14': {
     'q':"what are the 4 layers in the TCP/IP stack ( ATIL )",
     'a':"- Application \n - Transport \n - Internet / Network \n - Link" 
     }, 
'15': {
     'q':"what is the application layer",
     'a':"- software sends its data to this layer \n - specifies what protocol needs to be used based on what is being sent \n - HTTPS - webpage \n - POP3 - emails \n - FTP - general file transfer typically between client and server" 
     }, 
'16': {
     'q':"what is the role of the transport layer",
     'a':"- splits the data into packets \n - gives each packet a sequential number \n - gives source and destination port number (source port number is chosen in general by OS; destination port is based on the application protocol http->port 80) \n - uses TCP or UDP" 
     }, 
'17': {
     'q':"describe the TCP protocol",
     'a':"- reliable as data is verified using the 3 way handshake \n - SYN -> SYN-ACK -> ACK \n - slower" 
     }, 
'18': {
     'q':"describe the UDP protocol",
     'a':"- unreliable as no verification of packets reaching \n - low latency \n - used for real time operations (live calling/ live streaming)" 
     }, 
'19': {
     'q':"what is the role of the internet / network layer",
     'a':"- adds source and destination ip addresses \n - routers operate at this level \n - combination of ip and port number is a socket(specifies which device and which application is being sent to )" 
     }, 
'20': {
     'q':"what is the role of the link layer",
     'a':"- adds the MAC address of source and destination \n -- if in LAN, MAC address will be specific to device \n -- otherwise, MAC address of the router is used, which specifies the NIC \n  \n - manages the physical and data link ( medium which the packets travel through, eg. wi-fi ) \n packets become frames here" 
     }, 
'21': {
     'q':"describe the DNS ( Domain Name System )",
     'a':"- a system to organise the internet \n - servers are organised into domains \n - TLD - Top Level domain \n - 2LD - second level domain" 
     }, 
'22': {
     'q':"describe what happens when a URL is typed into a web browser",
     'a':"- the web browser sends the URL to the ISP \n - the ISP returns the ip address of the server by looking it up on the DNS" 
     }, 
'23': {
     'q':"what is a data packet",
     'a':"- segment of data being transmitted between computers" 
     }, 
'24': {
     'q':"what does a packet contain, and describe each component",
     'a':"- header \n -- sender and recipient ip addresses \n -- protocol ( allows the recipient computer to understand how to interpret the packet) \n -- order of the packet (sequential order of the packets) \n -- Time to live / hop limit ( number of hops until the packet is terminated) \n  \n - Payload \n -- actual data to be transmitted \n  \n -trailer \n -- checksum ( method to ensure the data hasn't been corrupted in the journey ) " 
     },
'25': {
     'q':"what is circuit switching",
     'a':"- a direct link is created between two devices \n - and is maintained throughout the conversation between the devices \n - happens within a network switch" 
     }, 
'26': {
     'q':"what are the advantages of circuit switching",
     'a':"- data arrives in logical order, no need to construct it \n - enables a communication without delay" 
     }, 
'27': {
     'q':"what are the disadvantages of circuit switching",
     'a':"- bandwidth is wasted during periods of when no data is being transmitted \n - ties up sections of the network which cannot be used by others until the transmission is over" 
     }, 
'28': {
     'q':"define packet switching",
     'a':"- process of transmitting data in segments called packets using a network \n - packets are sent through the most efficient route" 
     }, 
'29': {
     'q':"what are the advantages of packet switching",
     'a':"- multiple routes can be used / not dependent on a specific route which might have broken \n - packets can be transferred over very large networks allowing for efficient global communication \n  \n -? multiple methods of checking for the accuracy of data (checksum, cyclic redundancy checks)" 
     }, 
'30': {
     'q':"what are the disadvantages of packet switching",
     'a':"- time is spent constructing and deconstructing data \n - have to wait for all the packets to arrive" 
     }, 
'31': {
     'q':"define malware",
     'a':"- umbrella term for any code written with the intent to harm or frustrate" 
     }, 
'32': {
     'q':"what are some of the effects of malware",
     'a':"- deleting, corrupting or encrypting files \n - causing computers to crash or slow down \n - reducing network speeds \n - logging keyboard inputs and sending them to hackers" 
     }, 
'33': {
     'q':"define a virus",
     'a':"- pieces of code capable of copying themselves and spreading throughout a system \n - typically designed to corrupt or destroy files" 
     }, 
'34': {
     'q':"define spyware",
     'a':"- form of malware which secretly obtains information about a user's computer by transmitting data from their device" 
     }, 
'35': {
     'q':"what is an SQL injection",
     'a':"- an exploitation of poorly coded databases / code \n " 
     }, 
'36': {
     'q':"how is an SQL injection performed",
     'a':"when a web form is filled out, the input can be written in such a way that can affect the SQL statement" 
     }, 
'37': {
     'q':"define phishing",
     'a':"- emails which seem legitimate actually stealing data" 
     }, 
'38': {
     'q':"what is DDOS attack",
     'a':"- DDOS -> distributed denial of service \n - multiple computers constantly trying to access a server wasting its resources " 
     }, 
'39': {
     'q':"what is a firewall",
     'a':"- piece of software or hardware configured to let only certain types of traffic through it" 
     }, 
'40': {
     'q':"what are the types of things a firewall is used to prevent",
     'a':"- unauthorised access into a network \n - users from accessing parts of the internet prohibited by a company/school" 
     }, 
'41': {
     'q':"how does a firewall operate",
     'a':"- it monitors the packets' IP and port number, and denies the ones which do not configure to the admin's rules" 
     }, 
'42': {
     'q':"define what a proxy does",
     'a':"- acts as an intermediate server, collecting and sending data on behalf of the user" 
     }, 
'43': {
     'q':"what are the advantages of a proxy",
     'a':"- privacy of the user protected allowing them to remain anonymous \n - can be used by administrators to prevent access to sensitive or irrelevant information at work/school by checking the information before hand" 
     },
'44': {
     'q':"define encryption",
     'a':"- method of keeping data secure when transmitting it over the internet \n - makes data unreadable until its decrypted by the recipient" 
     }, 
'45': {
     'q':"what is a NIC",
     'a':"- network interface card \n - card required to connect a device to a network \n - has a unique mac address" 
     }, 
'46': {
     'q':"what is a modem",
     'a':"- a device which converts digital information to analogue signals able to be transmitted through wires" 
     }, 
'47': {
     'q':"what is a router",
     'a':"- connects a LAN to a WAN \n - routes data between devices and networks" 
     }, 
'48': {
     'q':"what is a cable",
     'a':"- used to physically allow a medium to transmit the data on" 
     }, 
'49': {
     'q':"what is a WAP ( wireless access point )",
     'a':"- creates a wireless LAN \n - connects to a router, switch or hub and provides wi-fi signal within an area" 
     }, 
'50': {
     'q':"what is a hub",
     'a':"- allows a user to connect multiple devices to one network \n - broadcasts the transmission to all other devices connected \n - much slower than switches" 
     }, 
'51': {
     'q':"what is a switch",
     'a':"- a device which allows a user to connect multiple devices to a network using data packets \n - sends the data to the exact device by using MAC address \n - prevents unnecessary traffic ( S-tier hub)" 
     }, 
'52': {
     'q':"what is a client to server network",
     'a':"- a network consisting of a central server with multiple clients accessing the information and resources located on the server \n - central server has much higher processing power" 
     }, 
'53': {
     'q':"what are the advantages of client to server network",
     'a':"- more secure as data is stored in one location \n - central backups are carried out so no need for individual back ups \n - data and resources can be shared between clients" 
     }, 
'54': {
     'q':"what are the disadvantages of the client to server network",
     'a':"- relatively expensive \n - staff required to maintain the server \n - single point of failure" 
     }, 
'55': {
     'q':"what is a peer to peer network",
     'a':"- computer connect to each other to share files \n - both computers act as a server and client, requesting and accessing files" 
     }, 
'56': {
     'q':"what are the advantages of a peer to peer network",
     'a':"- cheaper to set up \n - easy to maintain \n - not dependent on a central server \n - specialist staff not required \n - no single point of failure" 
     }, 
'57': {
     'q':"what are the disadvantages of a peer to peer network",
     'a':"- impossible to trace the origin of file \n - backups must be performed separately \n - poorer security \n - may be difficult to locate resources" 
     },
'58': {
     'q':"what is the purpose of HTML",
     'a':"- defines the structure and contents of a webpage" 
     }, 
'59': {
     'q':"what is the purpose of css",
     'a':"- used to define the style of a website" 
     }, 
'60': {
     'q':"what is the purpose of javascript",
     'a':"- language that runs in a web browser that can be embedded with HTML to add interactivity to websites" 
     }, 
'61': {
     'q':"if you want to link a css style sheet within a html document, what would you write",
     'a':"<link rel='stylesheet' type='text/css' href='myCss.css'>" 
     }, 
'62': {
     'q':"how do you add an image tag in html with an alternative when the image doesn't load",
     'a':"<img src='apple.jpeg' alt='an image of an apple'>" 
     }, 
'63': {
     'q':"how do you add a hyperlink in html linking to a website called index2",
     'a':"<a href='index2.html'> go to index2 </a>" 
     }, 
'64': {
     'q':"how do you add a form in html for an text input with a label and a submit button after",
     'a':"<form> \n <label> name: </label> \n <input type='text'> \n <input type='submit'> \n </form>" 
     }, 
'65': {
     'q':"what are tags for ordered and unordered list in html",
     'a':"ordered: <ol> \n unordered <ul>" 
     }, 
'66': {
     'q':"how do you make a list in html",
     'a':"<ol> \n <li> item 1 </li> \n <li> item 2 </li> \n </ol>" 
     }, 
'67': {
     'q':"whats the css for border width",
     'a':"- border-width" 
     }, 
'68': {
     'q':"define a search engine",
     'a':"- programs which search through a database of internet addresses looking for resources based on criteria by the client" 
     }, 
'69': {
     'q':"what is indexing",
     'a':"- process of a search engine collecting, sorting and storing data in its index" 
     }, 
'70': {
     'q':"why is search engine indexing important",
     'a':"- the order in which web resources are displayed is important because it determines which websites users choose to visit \n - therefore it is important that search engines display the most high quality content" 
     }, 
'71': {
     'q':"what are web crawlers(spiders)",
     'a':"- programs used to collect information about websites to build the index of that website" 
     }, 
'72': {
     'q':"how do web crawlers work",
     'a':"- they traverse internet, web page by web page using links on websites \n - web crawlers collect keywords and phrases from the linked web pages and add this information to the index \n - they also collect and add meta data from websites ( info specified by the website owners )" 
     }, 
'73': {
     'q':"what is the page rank algorithm",
     'a':"- algorithm which ranks web pages when a user searches on a search engine" 
     }, 
'74': {
     'q':"what are the two factors which determine the page rank of a page",
     'a':"- how many incoming links it has from other web pages \n - page rank of the pages from where those links are coming from" 
     }, 
'75': {
     'q':"this the page rank algo \n  \n PR(A) = (1-d) + d( sum[i=0 to n]( PR(i)/C(i) ) \n  \n - what is d and what is it normally set to \n - what is PR(i) \n - what is C(i)",
     'a':"- d = damping factor (typically set to 0.85 (6 click through links)) \n - PR(i) = Page rank of page i \n - C(i) = number links on page i" 
     }, 
'76': {
     'q':"what is server-side processing",
     'a':"- client sends data to a server, which is then processed by the server much faster than the client would be able to \n - requires languages like php or SQL \n  " 
     }, 
'77': {
     'q':"what are the advantages of server side processing",
     'a':"- perform calculations more quicker \n - more secure" 
     }, 
'78': {
     'q':"what is client side processing",
     'a':"- data is processed on the local device of the client \n - utilises languages like javascript" 
     }, 
'79': {
     'q':"what are the advantages of client side processing",
     'a':"- executes quickly as it happens directly on the users computer \n - webpage can immediately respond to user actions" 
     }
     
     
     },
     "section6":{
'1': {
     'q':"what are arrays",
     'a':"- ordered, finite set of elements of a single data type \n - 2D array can be visualised as a table" 
     }, 
'2': {
     'q':"what are records",
     'a':"- a row in a database \n - consists of fields" 
     }, 
'3': {
     'q':"what is a list",
     'a':"- consists of ordered items, can consist of different data types \n - not fixed, more elements can be added \n - data is not stored contiguously" 
     }, 
'4': {
     'q':"what is a tuple",
     'a':"- ordered set of values \n - immutable (cannot be changed when its created), initialised with normal brackets ()" 
     }, 
'5': {
     'q':"what is a linked list",
     'a':"- a dynamic data structure \n - items are not within contiguous locations \n - each item is called a node \n -- each node contains the actual data and a pointer to the next node " 
     }, 
'6': {
     'q':"what is a graph",
     'a':"- a set of node connected by arcs/edges" 
     }, 
'7': {
     'q':"what are the two methods graphs are interpreted by a computer",
     'a':"- adjacency matrices \n -- where the elements of the matrix represent the weight of the arc \n  \n - adjacency list \n -- 'A' : {'B':4, 'C':7...}" 
     }, 
'8': {
     'q':"what are the advantages of a adjacency matrix",
     'a':"- easier to add nodes \n - convenient to work with \n - quicker access times" 
     }, 
'9': {
     'q':"what is the advantage of a adjacency list over a matrix",
     'a':"- more space efficient for large sparse network as most elements in the matrix would not be required (null / - )" 
     }, 
'10': {
     'q':"what is a stack",
     'a':"- Last in First Out data structure" 
     }, 
'11': {
     'q':"what are the uses of a stack",
     'a':"- reversing actions \n ( photoshop action stack ) \n  \n - going back and forward in web browsers \n - recursion call stacks" 
     }, 
'12': {
     'q':"what are the 3 methods for a stack",
     'a':"- .peek() \n - .pop() \n - .push()" 
     }, 
'13': {
     'q':"what is a queue",
     'a':"- first in first out data structure" 
     }, 
'14': {
     'q':"what are the uses of queues",
     'a':"- printer queues \n - keyboard inputs \n - transaction processing" 
     }, 
'15': {
     'q':"what are the methods for a queue",
     'a':"- .peek() \n - .enqueue() \n - .dequeue()" 
     }, 
'16': {
     'q':"what is a circular queue",
     'a':"- a queue where when the rear pointer gets to the last index, it goes back to the front" 
     }, 
'17': {
     'q':"what is a tree",
     'a':"- a graph with no loops \n - has a root node \n - has leaf nodes \n - has subtrees?" 
     }, 
'18': {
     'q':"what is a binary tree",
     'a':"- a tree with max 2 children \n - allows for binary search" 
     }, 
'19': {
     'q':"what are the three traversal methods and their dot thingy",
     'a':"Pre-order     Post-Order \n In-order \n  \n - upside down therefore sign \n - place the dots on each node at the respective position and go from left to right on the graph" 
     }
     },
     "section7":{
'1': {
     'q':"how do you convert a +ve number into its -ve in binary two's complement",
     'a':"- flip all the digits and add one" 
     }, 
'2': {
     'q':"what are the advantages of two's complement over sign and magnitude",
     'a':"- allows for easy subtraction and addition of multi-signed numbers( +ve || -ve ) \n - larger range of numbers within the same number of bits \n " 
     }, 
'3': {
     'q':"what is ASCII",
     'a':"- 7 bit binary system mapping binary numbers to english characters and other symbols" 
     }, 
'4': {
     'q':"what is the issue with ASCII",
     'a':"- other languages weren't able to be represented" 
     }, 
'5': {
     'q':"what is unicode",
     'a':"- uses a varying number of bits allowing for over 1 million different characters \n - enough capacity to represent multiple languages, symbols and emojis" 
     }
     },
     "section8":{
'1': {
     'q':"what is demorgan's first law",
     'a':"¬(AxB) = ¬A + ¬B" 
     }, 
'2': {
     'q':"what is demorgan's second law",
     'a':"¬(A+B) = ¬A x ¬B" 
     }, 
'3': {
     'q':"what is the distribution law",
     'a':"A+(BxC) = AxB + AxC" 
     }, 
'4': {
     'q':"what is a d type flip flop",
     'a':"type of logic gate which can store the value of one bit" 
     }, 
'5': {
     'q':"what type of gate does a d type flip flop use",
     'a':"- NAND gate" 
     }, 
'6': {
     'q':"what are adders",
     'a':"- logic circuit which allow to depict binary addition through circuitry methods" 
     }, 
'7': {
     'q':"what do full adders chain to become",
     'a':"ripple adders" 
     } 
     },
     "section9":{
'1': {
     'q':"what are the 4 laws in the spec and their year dates",
     'a':"- copyright, design and patent acts ( 1988 ) \n - computer misuse act ( 1990 ) \n - Data Protection Act ( 1998 ) \n - Regulation of investigatory power act ( 2000 )" 
     }, 
'2': {
     'q':"what is within the copyright, design and patent act",
     'a':"- act to protect creators from their work being stolen \n - covers works like logos and music recordings \n - copyright automatically applies to original work" 
     }, 
'3': {
     'q':"what is included in the Computer Misuse Act",
     'a':"- unauthorised access to a computer system \n - unauthorised access with intent to commit fraud or crime \n - unauthorised modification of computer material" 
     }, 
'4': {
     'q':"what is included within the data protection act",
     'a':"1. personal data should be obtained for a specific purpose \n 2. personal data should be adequate and relevant \n 3. personal data shall be accurate and where necessary updated \n 4. personal data should be not kept longer than necessary \n 5. appropiate technical and organisational measures shall be taken against unauthorised or unlawful processing of personal data or accidental destruction or damage \n 6. personal data should not be transferred out of the European Economic Area, unless that country ensures adequate level or protection \n 7. personal data must be processed fairly and lawfully" 
     }, 
'5': {
     'q':"what is the regulation of investigatory powers act",
     'a':"- covers investigation and surveillance by public bodies \n - enforces ISPs to give up information upon request from an authorised authority \n - ensures that ISPs networks have sufficient hardware installed to facilitate surveillance \n - controversial as it allows small agencies like local council to also have this power \n - some people think this act is an invasion of privacy and is often improperly used" 
     } 
     }

    },


    "paper2": {

"section1":{
'1': {
     'q':'Define abstraction',
     'a':'Process of removing excessive details to focus only on the key features' 
     }, 
'2': {
     'q':'what is the need for abstraction',
     'a':'- allows people to convey with improved clarity the idea they are trying to convey to other people \n - allows non-experts to utilise a system without needing to know about exact details' 
     }, 
'3': {
     'q':'what is the difference between abstraction and reality',
     'a':'- abstraction is a simplified representation of reality \n - real world can be represented using computational structures such as tables' 
     }, 
'4': {
     'q':'how can the oops concepts be used to use abstraction?',
     'a':"- Abstraction can be used to simplify entities by instantiating them as objects \n - the entity's characteristics can be abstracted using attributes \n - the entity's real world actions are abstracted as methods" 
     }, 
'5': {
     'q':'what are certain things to think about when creating an abstract model?',
     'a':'- How will the model be used \n - who will use it and what is their level of expertise \n - what parts of the problem are relevant to the target audience' 
     }, 
'6': {
     'q':'what is "Thinking Ahead" about?',
     'a':'- identifying the preconditions of a system, its inputs, outputs and reusable components' 
     }, 
'7': {
     'q':'what are advantages of abstraction when designing a solution',
     'a':' -reduces memory requirement \n -reduces processing requirements \n - simplifies the problem being solved' 
     }, 
'8': {
     'q':'what does thinking ahead allow developers to do and what type of things should be taken into consideration when creating a new system?',
     'a':'- consider problems or difficulties that may arise when the software is used \n - acknowledging these from an early stand point can allow the developers to strategies how to make the program easier and intuitive to use   \n \n inputs and outputs required' 
     }, 
'9': {
     'q':'what is an input',
     'a':'- Data that is required to solve a problem' 
     }, 
'10': {
     'q':'what is an output',
     'a':'- results that are passed back once the inputs have been processed' 
     }, 
'11': {
     'q':'what are preconditions',
     'a':'- requirements which must be met before a program can be executed' 
     }, 
'12': {
     'q':'what happens if preconditions are not met',
     'a':'- the program will fail to execute or return an invalid answer' 
     }, 
'13': {
     'q':'where can preconditions be found',
     'a':'- within the documentation of the product  \n - or within the actual code' 
     }, 
'14': {
     'q':'what is caching?',
     'a':'- process of storing instructions/data in cache memory after they have been used AS THEY MAY BE USED AGAIN' 
     }, 
'15': {
     'q':"what is the advantage and disadvantage of caching",
     'a':"- allows frequently accessed instructions /data to be stored close to the cpu \n - this allows these instructions to be accessed quicker which improves the speed of processing \n - reduces idle time for the cpu \n - reduces bottlenecks as accessing RAM can be slower than accessing cache \n \n \ndisadvantages: \n -limited storage space \n -costly to build" 
     },
'16': {
     'q':"what is prefetching?",
     'a':"- variation of caching \n - algorithms predict which instruction are likely to be soon fetched \n - these instructions are then put into cache to be easily accessed" 
     }, 
'17': {
     'q':"what are the limitations of prefetching",
     'a':"it's a predictive algorithm and therefore each time it will not be perfect, and in some scenarios it will have took more time" 
     },
'18': {
     'q':"what are reusable components",
     'a':"commonly used functions which are often packaged into libraries for reuse" 
     }, 
'19': {
     'q':"what are the advantages of reusable components",
     'a':"- more reliable, as they are tested so can be used in other programs \n - save time, money and resources in not having to redevelop \n reduces testing requirements " 
     }, 
'20': {
     'q':"disadvantages of reusable components",
     'a':"- there can be compatibility issues \n - which may require modifications, which can then be more costly and require more time" 
     }, 
'21': {
     'q':"Can components be reused across projects",
     'a':"Yes, like the text adapter component windows first developed for word, then used across their software like PowerPoint and excel" 
     }, 
'22': {
     'q':"What is thinking procedurally about?",
     'a':"- breaking a problem down to make it easier to understand and consequently easier to design and solve" 
     }, 
'23': {
     'q':"what is the first step of thinking procedurally",
     'a':"- problem decomposition \n - breaking down the components of the user's requirements \n - the main problem is constantly broken down into smaller and smaller subproblems which can then be solved much more easily" 
     }, 
'24': {
     'q':"what is stepwise refinement",
     'a':"- a problem is broken down into levels \n - higher levels provide an overview of a problem \n - lower levels go deeper into the specificities of the problem" 
     }, 
'25': {
     'q':"what is a top down design",
     'a':"a design of a program which keeps splitting problems into subproblems until each subproblem can be represented as a single task or module/subroutine" 
     }, 
'26': {
     'q':"what should be put into consideration when constructing the final solution",
     'a':"- whether parts of the solution depend on other parts \n - can some parts of the program be processed at once \n - optimising and correcting the order of what happens and when it happens allows the program to hold integrity and makes it more time and space effecient" 
     }, 
'27': {
     'q':"what is thinking logically about",
     'a':"identifying the individual steps and decision points of an algorithm" 
     }, 
'28': {
     'q':"what are the conditions that should be taken into consideration when thinking about the outcome of descion",
     'a':"- most effective \n - most convenient \n - reasobable \n - these conditions ought to be evaluated and ordered from least to most important" 
     }, 
'29': {
     'q':"what else does thinking logically involve",
     'a':"- identifying where decisions need to be made by the user within the program and planning the outcomes of the decisions made \n - based on the decisions of the user, the program will take different routes" 
     }, 
'30': {
     'q':"what is thinking concurrently about",
     'a':"- identifying how multiple processes can happen at one time to optimise programs" 
     }, 
'31': {
     'q':"what is the difference in concurrent processing and concurrent thinking",
     'a':"- concurrent processing is using computers to process \n - concurrent thinking is using a brain" 
     }, 
'32': {
     'q':"what is the difference in parallel processing and concurrent processing",
     'a':"- parallel processing is when multiple processors are used to complete more than one task simultaneously \n - concurrent processing is when each task is given a time slice to be processed ( round robin )" 
     }, 
'33': {
     'q':"what are the benefits of concurrent processing",
     'a':"- number of tasks completed in a given time is increased \n - less time is wasted waiting for an input, as other tasks can be completed (rethink this one)" 
     }, 
'34': {
     'q':"what are the drawbacks of concurrent processing",
     'a':"- can take longer to complete when large numbers of tasks are involved \n - not all tasks are suited to being broken up and performed concurrently ( Rethink and maybe add more)" 
     }
},
"section2":{
'1': {
     'q':"What are the three programming constructs",
     'a':"- sequence \n - iteration \n - branching / selection" 
     }, 
'2': {
     'q':"define each (sequence, branching, iteration)",
     'a':"- sequence { code is executed line by line } \n - selection { a certain block of code is run if a specific condition is met } \n - iteration { a certain block of code is repeated until a given condition or a certain number of times }" 
     }, 
'3': {
     'q':"what is recurstion",
     'a':"- programming construct in which a subroutine calls itself during its execution \n - the subroutine keeps calling itself until a 'base case' is met \n - same result as iteration" 
     },
'4': {
     'q':"what are the advantages of recursion",
     'a':"- problems can be represented in fewer lines code \n - making them less prone to errors" 
     }, 
'5': {
     'q':"what are disadvantages of recursion",
     'a':"- inefficient use of memory (danger of stack overflow) \n - more difficult to trace" 
     },
'6': {
     'q':"What happens when the function is called within recursion?",
     'a':"- a new stack frame is added to the call stack \n - the parameters, local variables and return addresses are stored within the frame \n - this allows the subroutine to return to that exact point \n - when the base case is finally met, the subroutine unwinds" 
     }, 
'7': {
     'q':"define local variables",
     'a':"- a variable that is declared within a specific subroutine or block of code and can only be accessed within that subroutine \n - it is created when the subroutine starts \n - it is destroyed when the subroutine ends" 
     }, 
'8': {
     'q':"define global varible",
     'a':"a variable that is declared outside of all subroutines and can be accessed and modified throughout the program" 
     }, 
'9': {
     'q':"what are the advantages of global varibles",
     'a':"- Variable doesn't need passing as a parameter \n -You don't need to return a value \n -Can be accessed from any function / anywhere in the program" 
     }, 
'10': {
     'q':"what are the disadvantages of global variables",
     'a':"- Alterations within the function may have unwanted side effects elsewhere in the program \n - require more memory, as global variables are not deleted until the program has finished" 
     }, 
'11': {
     'q':"what would happen if a local variable is named the same as a global variable and is referenced within that local scope?",
     'a':"the local variable will override the global variable" 
     }, 
'12': {
     'q':"what is modular programming",
     'a':"- programming technique used to split large, complex programs into smaller and self-contained modules" 
     }, 
'13': {
     'q':"what are the advantages of modularity",
     'a':"- essential to make a problem easier to understand \n - modular designs also make it easier to divide tasks between a team \n - allowing to simplify processes of testing and maintenance \n - promotes reusability of components, as once modules are tested, they can be reused with confidence" 
     }, 
'14': {
     'q':"what is a subroutine",
     'a':"- functions and procedures" 
     },
'15': {
     'q':"What is the difference between a procedure and function?",
     'a':"- function: must always return a single value \n - procedures do not have to return a value ( can however ) \n - procedures are typically given data as parameters for manipulation \n  \n " 
     }, 
'16': {
     'q':"what is the difference in byVal and byRef",
     'a':"- byRef: the MEMORY LOCATION of the parameter is given to the subroutine, value of the original variable will change when its changed within the subroutine \n - byVal: a copy of the value is passed to the subroutine and discarded at the end, the original variable is not modified" 
     }, 
'17': {
     'q':"what is an IDE",
     'a':"- Integrated Development Area \n - a program which provides a set of tools to make it easier for programmers to write, develop and debug code" 
     }, 
'18': {
     'q':"What are the features of IDEs",
     'a':"- stepping: this allows the developer to monitor the effect of each individual line of code \n - variable watch: allows the developer to observe how the contents of a variable change in real-time through the execution of a program \n - breakpoint: allows developers to set a point in the program at which the program will stop \n - debugging tools: provides run time detection of errors suggesting where in the code they are likely to have occurred through line numbers and highlighting" 
     }, 
'19': {
     'q':"what are some of tools provided by source code editors?",
     'a':"- autocompletion \n - indentation \n - syntax highlighting \n - automatic bracket completion " 
     },
'20': {
     'q':"What is a class",
     'a':"- a template for an object which defines the state and behaviours of an object \n - state: given by the attributes (object's properties) \n - behaviour: given by the methods (object's methods)" 
     }, 
'21': {
     'q':"how are objects created",
     'a':"- through a process called instantiation" 
     }, 
'22': {
     'q':"what is a object",
     'a':"- a particular instance of a class" 
     }, 
'23': {
     'q':"what is encapsulation",
     'a':"process of bundling data and the methods that operate on that data into a single unit called a class" 
     }, 
'24': {
     'q':"what is a computable problem?",
     'a':"- a problem that can be solved by algorithms within a finite and realistic amount of time \n - consists of inputs, outputs and calculation" 
     },
'24.5':{
     'q':'what are the computational methods',
     'a':'-problem recognition \n -problem decomposition \n -divide and conquer \n -abstraction \n -problem solving techniques'
     },
'25': {
     'q':"what is problem recognition?",
     'a':"- stakeholders clearly define the problem and system requirements \n - then the current solution is analysed for its strengths and weaknesses \n - the inputs, outputs and data storage are also taken into consideration" 
     }, 
'26': {
     'q':"what is problem decomposition?",
     'a':"- a problem is continually broken down into smaller and smaller problems \n - this is done until each problem can be represented as an individual subroutine" 
     },
'27': {
     'q':"what are the advantages of problem decomposition",
     'a':"- by breaking modules, programmers can identify sections of the program which can be modularised or be used as pre-compiled: this then saves time \n - allows projects to be managed easier: software development teams can be split into further teams working on specific sections based on their speciality \n - allows debugging to be done easier: as it is easier to locate the issue and mitigate errors \n " 
     }, 
'28': {
     'q':"what is divide and conquer",
     'a':"- problem solving technique which recursively divides a problem into half and then 'conquers' it when the problem is small enough \n - in some implementations, the solutions are then merged back together" 
     }, 
'29': {
     'q':"disadvantages of recursion",
     'a':"- often uses recursion: so potential for stack overflow, high use of memory \n - large problems are difficult to trace" 
     }, 
'30': {
     'q':"what is representational abstraction?",
     'a':"- excessive details are removed to simplify problem \n - allows developers to focus on the core aspects required of the solution rather than worrying about unnecessary details" 
     }, 
'31': {
     'q':"what is levels of abstraction",
     'a':"- allows a large complex project to split into smaller component parts into levels \n - individual components can then be dealt with by different teams" 
     }, 
'32': {
     'q':"what is abstraction by generalisation?",
     'a':"- grouping together different sections of the problem with similar underlying functionality \n - allows segments to be coded together and reused: which then saves time" 
     }, 
'33': {
     'q':"name all the problem solving strategies? \n (pvp dbh)   ",
     'a':"- backtracking \n - data mining \n - heuristics \n - performance modelling \n - pipelining \n - visualisation" 
     }, 
'34': {
     'q':"what is backtracking",
     'a':"- problem solving technique which works by methodically visiting each path until the correct path is found \n - whenever a partial solution fails, the algorithm backtracks to the last point of success and tries a different possibility \n - eg. depth first traversals (maze finding algorithms)" 
     }, 
'35': {
     'q':"what is data mining",
     'a':"- process of analysing vast amounts of data to identify useful patterns and trends \n - these data sets can then be analysed computationally using various data mining techniques to reveal patters and trends typically associated with human behaviour" 
     }, 
'36': {
     'q':"what are hueristics",
     'a':"- non optimal approach to problem solving \n - used to find an approximate solution to a problem when the standard solution is unreasonably time consuming/resource intensive to find \n - solutions found through heuristics are not necessarily the most optimal but 'good enough'" 
     }, 
'37': {
     'q':"what is performance modelling",
     'a':"- process of approximating how well SYSTEM models perform using mathematics \n - based around the use simulations and mathematical approximations" 
     },
'38':{
     'q':"what is the advantage of performance modelling",
     'a':"- allows for a cheaper and less time consuming and potentially safer method of testing applications \n - results from performance modelling can then help organisations judge the capabilities of a system"
     }, 
'39': {
     'q':"what is pipelining",
     'a':"- modules are divided into individual tasks and are processed in parallel \n - typically, the output of a task is the input of another \n - allows projects or tasks to be finished more effectively" 
     }, 
'40': {
     'q':"what is visualisation",
     'a':"- data can be presented in a way that is easier for humans to understand using visualisation \n - allows us to quickly identify trends that were not previously as visible within raw data \n - depending on the data, the data can be visualised through graphs, tables, trees, charts..." 
     }
},
"section3":{
'1': {
     'q':"what is a algorithm",
     'a':"- a series of steps that completes a task" 
     }, 
'2': {
     'q':"what type of traversal is depth first",
     'a':"post-order" 
     }, 
'3': {
     'q':"what type of search is dijistrika",
     'a':"breadth first" 
     },
'4': {
     'q':"what is an identifier",
     'a': "a name used to uniquely identify a specific element in the code, such as a variable, function, class, or other named entity"
     },
'5': {
     'q':"How do you show inheritance in ocr reference language",
     'a':"class dog inherits animal \n public procedure new(all the parent class parameters, and new ones) \n super.new(parent class parameters) \n attributes = parameters" 
     },
'6': {
     'q':"what is breadth first traversal",
     'a':"Breadth first takes first value then visits all nodes connected to it. It then takes all nodes connected to those nodes." 
     }, 
'7': {
     'q':"what is depth first traversal",
     'a':"Depth first goes to the left node, this becomes a new tree. It continues going to the left until a leaf. It then returns this, then goes right and repeats from the start. Follow left, follow right, take root." 
     }, 
'8': {
     'q':"when is breadth first more efficient",
     'a':"- when data searched for is closer to the root" 
     }, 
'9': {
     'q':"when is depth first more effecient",
     'a':"when data is further down the tree" 
     }, 
'10': {
     'q':"what are the advantages of depth first search",
     'a':"- memory requirement is linear \n - depth can be written recursively to aid understanding" 
     }, 
'11': {
     'q':"what are the advantages to breadth",
     'a':"- general better time complexity" 
     },
'12':{
     'q':"write down all the big Os for the algorithms, their best and worst cases and averages",
     'a':"ensure this happens"
}
},
"section4":{

},
"section5":{
     
},
"section6":{
     
},
"section7":{
     
},
"section8":{
     
},
"section9":{
     
}


    }
};


// Card flipping function
function flipper() {
    var mainText = document.getElementById("mainText");
    var FlashCard = document.getElementById("FlashCardMain");
    var AnswerText = document.getElementById('answerText');
    var forBreak = document.getElementById("forBreak");
    
    if (`${qnumber}` in cards[curPaper][`section${currentSectionNumber}`]){

          if (isTextQuestion) {
               FlashCard.style.borderColor = "#ffffff";
               FlashCard.style.borderWidth = "2px";
               mainText.innerHTML = cards[curPaper][`section${currentSectionNumber}`][`${qnumber}`]["q"].replace(/\n/g, "<br>");

               try{

                    // removing the hr
                    let myHrElement = forBreak.querySelector("hr");
                    forBreak.removeChild(myHrElement);
               }catch{
                    ;
               }

               AnswerText.innerHTML = "";

          } else {
               FlashCard.style.borderColor = "#ffffff"
               mainText.innerHTML = cards[curPaper][`section${currentSectionNumber}`][`${qnumber}`]["q"].replace(/\n/g, "<br>");

               try{
               // adding the hr
               let myHr = document.createElement("hr");
               forBreak.appendChild(myHr);
               }catch{
                    ;
               }

               FlashCard.style.borderColor = "aquamarine"
               FlashCard.style.borderWidth = "5px";
               AnswerText.innerHTML = cards[curPaper][`section${currentSectionNumber}`][`${qnumber}`]["a"].replace(/\n/g, "<br>");
          }
          isTextQuestion = !isTextQuestion;

          return true;
     }else{
          return false;
     }
}

// function to traverse randomly
function RandomForward(){

     let checkVal = 1;

     try{
          checkVal = Object.keys(cards[curPaper][`section${currentSectionNumber}`]).length-1;

     }catch{
          alert("invalid section");
          changeSection(1);
     }

     if (RandCounter == checkVal){
          RandCounter = 0;
     }
     else{
          RandCounter = RandCounter + 1;
     }

     qnumber = randomList[RandCounter];

     isTextQuestion = true;
     changeTopNums();

}
function RandomBackward(){

     if (RandCounter == 0){

          try{
               RandCounter = Object.keys(cards[curPaper][`section${currentSectionNumber}`]).length-1;
          }catch{
               alert("invalid section");
               changeSection(1);
          }
     }
     else{
          RandCounter = RandCounter - 1;
     }

     qnumber = randomList[RandCounter]

     isTextQuestion = true;
     changeTopNums();
     flipper();

}

// functions to orderly traverse
function OrderedForward() {
     try{
          var length = Object.keys(cards[curPaper][`section${currentSectionNumber}`]).length;

          if (qnumber == length){
               qnumber = 1;
           }
           else{
               qnumber = qnumber + 0.5;
           }
       
           isTextQuestion = true;
       
           changeTopNums();
           if (!flipper()){
               OrderedForward();
           };


     }catch{
          changeSection(1);
     }

}
function OrderedBackward() {

     try{
          var length = Object.keys(cards[curPaper][`section${currentSectionNumber}`]).length;

          if (qnumber == 1){
               qnumber = length;
           }
           else{
               qnumber = qnumber - 1;
           }
       
           isTextQuestion = true;
       
           changeTopNums();
           flipper();

     }catch{
          alert("invalid section");
          changeSection(1);
     }
}

// function to change the numbers at the top of the questions
function changeTopNums(){
    cardNumberL.innerHTML = (qnumber-2+ Object.keys(cards[curPaper][`section${currentSectionNumber}`]).length )%(Object.keys(cards[curPaper][`section${currentSectionNumber}`]).length)+1;
    cardNumberM.innerHTML = qnumber;
    cardNumberR.innerHTML = ((qnumber)%(Object.keys(cards[curPaper][`section${currentSectionNumber}`]).length)) + 1;
}

// functions to change the content which is being traversed
function changeToPaper1(){

     // change the colors of the buttons
     // remove the color of the old one
     document.getElementById(`s${currentSectionNumber}`).style.borderColor = "#000000";
     // add to the new section button
     document.getElementById(`s${1}`).style.borderColor = "#ffffff";


     currentSectionNumber = 1;

    curPaper = "paper1";
    qnumber = 1;
    isTextQuestion = true;
    RandCounter = 0;
    flipper();
    changeTopNums();

    document.getElementById("p1").style.borderColor = "#ffffff";
    document.getElementById("p2").style.borderColor = "#000000";

    // used to make the random list based on the paper
    RandomListCreator();

    TempListQuestionData = [];

}
function changeToPaper2(){

     // change the colors of the buttons
     // remove the color of the old one
     document.getElementById(`s${currentSectionNumber}`).style.borderColor = "#000000";
     // add to the new section button
     document.getElementById(`s${1}`).style.borderColor = "#ffffff";


     currentSectionNumber = 1;

    curPaper = "paper2";
    qnumber = 1;
    isTextQuestion = true;
    RandCounter = 0;
    flipper();
    changeTopNums();

    document.getElementById("p2").style.borderColor = "#ffffff";
    document.getElementById("p1").style.borderColor = "#000000";

     // used to make the random list based on the paper
     RandomListCreator();

     TempListQuestionData = []
}

// function to create the random list for traversal
function RandomListCreator(){

     var numItems = Object.keys(cards[curPaper][`section${currentSectionNumber}`]).length;

     var myList = []

     for (let i = 0; i<numItems; i++){

          // the qnumbers range from 1-len(list)
          myList[i] = i+1;

     }

     for (let i = 0; i<numItems; i++){

          var myNum = Math.floor( Math.random() * myList.length);

          var temp = myList[i];
          myList[i] = myList[myNum];
          myList[myNum] = temp;

     }

     randomList = myList;

}

// functions to change the traversal type
function changeToRandom(){

     TraversalMethod = "random";
     isTextQuestion = true;

     document.getElementById('Weaker').style.borderColor = "#000000"
     document.getElementById("Orde").style.borderColor = "#000000";
     document.getElementById("Rand").style.borderColor = "#ffffff";

}
function changeToOrdered(){

     TraversalMethod = "order";
     isTextQuestion = true

     document.getElementById('Weaker').style.borderColor = "#000000"
     document.getElementById("Orde").style.borderColor = "#ffffff";
     document.getElementById("Rand").style.borderColor = "#000000";

}

// functions to correctly traverse through the data
function TraverserRight(){

     // change the color of the right/wrong buttons to indicate question has changed
     document.getElementById('QuestionCorrect').style.borderColor = "#000000";
     document.getElementById('QuestionWrong').style.borderColor = "#000000";

     if (TraversalMethod == "random"){
          RandomForward();
     }
     else if (TraversalMethod == "order"){
          OrderedForward();
     }
     else{
          WeakForward();
     }

}
function TraverserLeft(){

     // change the color of the right/wrong buttons to indicate question has changed
     document.getElementById('QuestionCorrect').style.borderColor = "#000000";
     document.getElementById('QuestionWrong').style.borderColor = "#000000";

     if (TraversalMethod == "random"){
          RandomBackward();
     }
     else if (TraversalMethod == "order"){
          OrderedBackward();
     }
     else{
          WeakBackward();
     }

}


// mechanism for question data

let TempListQuestionData = []

function findQuestion(n, mylist){

     for (let i = 0; i<mylist.length; i++){
          if (mylist[i][0] == n){
               return i;
          }
     }

     return -1;

}

function CreatingData(QCorrect){

     // find the index of the qnumber
     let QIndex = findQuestion(qnumber, TempListQuestionData);

     // does not exist in the list already
     if (QIndex == -1){

          // in the form [questionNumber, number of times wrong, number of times right]
          if (QCorrect){
               TempListQuestionData.push([qnumber, 0, 1]);

               document.getElementById('QuestionCorrect').style.borderColor = "#ffffff";

          }
          else{
               TempListQuestionData.push([qnumber, 1, 0]);

               document.getElementById('QuestionWrong').style.borderColor = "#ffffff";

          }

     }
     else{

          // in the form [questionNumber, number of times wrong, number of times right]
          if (QCorrect){
               TempListQuestionData[QIndex] = [TempListQuestionData[QIndex][0], TempListQuestionData[QIndex][1], TempListQuestionData[QIndex][2]+1];

               document.getElementById('QuestionCorrect').style.borderColor = "#ffffff";

          }
          else{
               TempListQuestionData[QIndex] = [TempListQuestionData[QIndex][0], TempListQuestionData[QIndex][1]+1, TempListQuestionData[QIndex][2]];
          
               document.getElementById('QuestionWrong').style.borderColor = "#ffffff";

          }

     }

     console.log(TempListQuestionData);

}

function outputData(mylist){

     let mainString = "["

     for (let i = 0; i < mylist.length-1; i++){
          let MinorString = `[${mylist[i][0]},${mylist[i][1]},${mylist[i][2]}], `
          mainString = mainString + MinorString;
     }

     let LastIndex = mylist.length-1;

     let MinorString = `[${mylist[LastIndex][0]},${mylist[LastIndex][1]},${mylist[LastIndex][2]}]]`
     mainString = mainString + MinorString;

     console.log(mainString);

     outBox.value = mainString;

     outBox.innerHTML = mainString;

}

// adds the new data to the old data and outputs it
function processData(){

     // if the current paper is 1
     if (curPaper == "paper1"){

          // iterate through the temporary data created
          for (let i = 0; i<TempListQuestionData.length; i++){
          
               // find the index of the question
               // sections go 1,2,3 => index sectionNum-1
               let myindex = findQuestion(TempListQuestionData[i][0],questionDataP1[currentSectionNumber-1]);

               if (myindex == -1){
                    questionDataP1[currentSectionNumber-1].push(TempListQuestionData[i]);
               }
               else{
                    questionDataP1[currentSectionNumber-1][myindex][1] = questionDataP1[currentSectionNumber-1][myindex][1] + TempListQuestionData[i][1];
                    questionDataP1[currentSectionNumber-1][myindex][2] = questionDataP1[currentSectionNumber-1][myindex][2] + TempListQuestionData[i][2];
               }
          }

          outputData(questionDataP1[currentSectionNumber-1]);

     }
     else{

          for (let i = 0; i<TempListQuestionData.length; i++){
          
               let myindex = findQuestion(TempListQuestionData[i][0],questionDataP2[currentSectionNumber-1]);

               if (myindex == -1){
                    questionDataP2[currentSectionNumber-1].push(TempListQuestionData[i]);
               }
               else{
                    questionDataP2[currentSectionNumber-1][myindex][1] = questionDataP2[currentSectionNumber-1][myindex][1] + TempListQuestionData[i][1];
                    questionDataP2[currentSectionNumber-1][myindex][2] = questionDataP2[currentSectionNumber-1][myindex][2] + TempListQuestionData[i][2];
               }
          }

          outputData(questionDataP2[currentSectionNumber-1]);

     }

     TempListQuestionData = [];

}


// mechanism to change sections
function changeSection(sectionNum){

     if (Object.keys(cards[curPaper][`section${sectionNum}`]).length > 0){

     // change the colors of the buttons
     // remove the color of the old one
     document.getElementById(`s${currentSectionNumber}`).style.borderColor = "#000000";
     // add to the new section button
     document.getElementById(`s${sectionNum}`).style.borderColor = "#ffffff";


     currentSectionNumber = sectionNum;

     qnumber = 0;
     changeToOrdered();
     TraverserRight();

     RandomListCreator();

     }
     else{
          alert("invalid section");
     }

}


// mechanism to traverse through weak flashcards

// initalise temporary list for traversal and weights
// list used for traversing through weak questions
// in the format [ [index, weight], [index2, weight2] ...  ]
var WeakList = [];

var weakCounter = -1;

function ChangeToWeakest(){

     TraversalMethod = "Weak";
     isTextQuestion = true;

     document.getElementById('Weaker').style.borderColor = "#ffffff"
     document.getElementById("Orde").style.borderColor = "#000000";
     document.getElementById("Rand").style.borderColor = "#000000";

     // create the traversal list
     CreateWeights();

     WeakForward();

}

function WeakForward(){

     var checkVal = WeakList.length-1;

     if (weakCounter == checkVal){
          weakCounter = 0;
     }
     else{
          weakCounter = weakCounter + 1;
     }

     console.log(WeakList[weakCounter][0]);
     qnumber = WeakList[weakCounter][0];

     isTextQuestion = true;
     changeTopNums();
     flipper();

}

function WeakBackward(){

     if (weakCounter == 0){
          weakCounter = WeakList.length-1;
     }
     else{
          weakCounter = weakCounter - 1;
     }

     console.log(WeakList[weakCounter][0]);
     qnumber = WeakList[weakCounter][0];

     isTextQuestion = true;
     changeTopNums();
     flipper();


}

// Currently prototype and basic; need to change
// algorithm to calculate the weight
function CaclulateWeight(dataList){

     if (dataList[1] + dataList[2] == 0){
          return 0;
     }
     else{
     return (dataList[1]) / ( dataList[1] + dataList[2] );
     }
}

// function to create traversal list
function CreateWeights(){

     WeakList = [];

     if (curPaper == "paper1"){

          for (let i =0; i<questionDataP1[currentSectionNumber-1].length; i++){

               var NewWeight = CaclulateWeight(questionDataP1[currentSectionNumber-1][i]);

               console.log(NewWeight);
               WeakList.push([questionDataP1[currentSectionNumber-1][i][0],NewWeight]);

          }

     }
     else{

          for (let i =0; i<questionDataP2[currentSectionNumber-1].length; i++){

               var NewWeight = CaclulateWeight(questionDataP2[currentSectionNumber-1][i]);

               console.log(NewWeight);
               WeakList.push([questionDataP2[currentSectionNumber-1][i][0],NewWeight]);

          }
     }

     SortList(WeakList);
     console.log(WeakList);

}

function SortList(myList){

     // linear sort the list
     for (let i = 1; i<myList.length; i++){

          var CurrentIndex = i;

          while ( CurrentIndex > 0 && myList[CurrentIndex-1][1] < myList[CurrentIndex][1]){

               var Temp = myList[CurrentIndex];
               myList[CurrentIndex] = myList[CurrentIndex-1];
               myList[CurrentIndex-1] = Temp;

               CurrentIndex = CurrentIndex - 1;
          }
     }

}

function clearBox(){

     outBox.value = "";
     outBox.innerHTML = "";

}


// initalise the question numbers at the top
var cardNumberL = document.getElementById("num1");
var cardNumberM = document.getElementById("num2");
var cardNumberR = document.getElementById("num3");


// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {      

     // always open up to section 1
     changeSection(1);

     // mechanism to select correct section
     document.getElementById('s1').addEventListener('click', function(){
          changeSection(1);
     });
     document.getElementById('s2').addEventListener('click', function(){
          changeSection(2);
     });
     document.getElementById('s3').addEventListener('click', function(){
          changeSection(3);
     });
     document.getElementById('s4').addEventListener('click', function(){
          changeSection(4);
     });
     document.getElementById('s5').addEventListener('click', function(){
          changeSection(5);
     });
     document.getElementById('s6').addEventListener('click', function(){
          changeSection(6);
     });
     document.getElementById('s7').addEventListener('click', function(){
          changeSection(7);
     });
     document.getElementById('s8').addEventListener('click', function(){
          changeSection(8);
     });
     document.getElementById('s9').addEventListener('click', function(){
          changeSection(9);
     });


     document.getElementById('QuestionCorrect').addEventListener('click', function(){
          CreatingData(true);
     })

     document.getElementById('QuestionWrong').addEventListener('click', function(){
          CreatingData(false);
     })

     document.getElementById('DataCreationButton').addEventListener('click', processData);

     // initally create the random list
     RandomListCreator();
     
     // button used to flip between question and answer
    var flipButton = document.getElementById('flipButton');
    if (flipButton) {
        flipButton.addEventListener('click', flipper);
    }

    // go to next/previous question
    var rightButton = document.getElementById('rightButton');
    var leftButton = document.getElementById('leftButton');
    rightButton.addEventListener('click', TraverserRight);
    leftButton.addEventListener('click', TraverserLeft);

    // change the question based on keys
    document.addEventListener('keydown', function(event){

     keysPressed[event.key] = true;

     if (keysPressed["ArrowLeft"] && keysPressed["Control"]){
          TraverserLeft();
     }
     else if (keysPressed["ArrowRight"] && keysPressed["Control"]){
          TraverserRight();
     }
     else if (keysPressed["ArrowDown"] && keysPressed["Control"]){
          flipper();
     }
     else if (keysPressed[","] && keysPressed["Control"]){
          CreatingData(true)
     }
     else if (keysPressed["."] && keysPressed["Control"]){
          CreatingData(false)
     }
     else if (keysPressed[";"] && keysPressed["Control"]){
          clearBox();
     }
     

    })

    document.addEventListener('keyup', function(event){
     keysPressed[event.key] = false;
    })

    const outBox = document.getElementById('outBox');

    // change the paper content
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    if (p1 && p2){
        p1.addEventListener('click', changeToPaper1);
        p2.addEventListener('click', changeToPaper2);
    }


    // change the traversal method based on the button selected
    var Orde = document.getElementById("Orde");
    var Rand = document.getElementById("Rand");
    var Weaker = document.getElementById("Weaker");
    if (Orde && Rand){
          Orde.addEventListener('click', changeToOrdered);
          Rand.addEventListener('click', changeToRandom);
          Weaker.addEventListener('click', ChangeToWeakest);
    }


});
