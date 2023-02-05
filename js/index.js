/**
 * doors 1800,2200,3100
 */
const appVue = new Vue({
    el: '#app',
    data(){
        return {
            paths:[],
            price: 0,
            isFormOn: false,
            selected: false,
            isComplexVisible: false,

            isDoors: false,
            isRoof: false,
            isFloor: false,
            isTrunk: false,
            isArcs: false,
            isHood: false,
            isTorpedo: false,
            text: 'sdsd',
        }
    },

    computed: {
        priceCalc() {
            // Форма актива или нет

            // if(this.isFormOn){
            if(this.isComplexVisible){
                this.price = this.price  + 10000;
            } else if(!this.isComplexVisible){
                this.price = (!this.price)
            }
            if(this.isDoors){
                this.price = this.price  + 3100;
            } else  if(!this.isDoors){
                (!this.price)
            }
            if(this.isRoof){
                this.price = this.price  + 3100;
            } else if(!this.isRoof){
                (!this.price)
            }
            if(this.isFloor){
                this.price = this.price  + 3100;
            } else if(!this.isFloor){
                (!this.price)
            }
            if(this.isTrunk){
                this.price = this.price  + 3100;
            } else if(!this.isTrunk){
                (!this.price)
            }
            if(this.isArcs){
                this.price = this.price  + 3100;
            } else if(!this.isArcs){
                (!this.price)
            }
            if(this.isHood){
                this.price = this.price  + 3100;
            } else if(!this.isHood){
                (!this.price)
            }
            if(this.isTorpedo){
                this.price = this.price  + 3100;
            } else if(!this.isTorpedo){
            }
            return this.price;
        },
        
    },

    methods: {
        toggleActive() {
            // задача менять на противоположное значение 
            // this.isActive = true;
            this.isActive = !this.isActive; 
        },
        toggleRoof() {
            this.isRoof = !this.isRoof; 
        },
        toggleFloor() {
            this.isFloor = !this.isFloor; 
        },
        toggleTrunk() {
            this.isTrunk = !this.isTrunk; 
        },
        toggleArcs() {
            this.isArcs = !this.isArcs; 
        },
        toggleHood() {
            this.isHood = !this.isHood; 
        },
        toggleTorpedo() {
            this.isTorpedo = !this.isTorpedo; 
        },
        toggleDoors() {
            console.log(1);
            this.isDoors = !this.isDoors; 
        },
    },

    watch: {
        // отслеживает все клики по форме 
        //  хотябы один флаг включен? 
        // если да  this.isFormOn = true;
        // иначе  this.isFormOn = false;￼

        // сделать такую функцию 
        // isFormOn(value){
        //     if(
        //         this.isComplexVisible || 

        //     ){

        //     }
        // },

        isComplexVisible(value){
            // console.log(value);
            if(value){
                this.isFormOn = true;
                this.isComplexVisible = true;
                this.isDoors = true;
                this.isRoof = true;
                this.isFloor = true;
                this.isTrunk = true;
                this.isArcs = true;
                this.isHood = true;
                this.isTorpedo = true;
            } else {
                // this.price = this.price  - 10000;
                this.isComplexVisible = false;
                this.isDoors = false;
                this.isRoof = false;
                this.isFloor = false;
                this.isTrunk = false;
                this.isArcs = false;
                this.isHood = false;
                this.isTorpedo = false;
            }
            
        },

        isDoors(value){
            console.log(value);
            if(value){
                this.paths.push('doors');
            } else {
                this.paths.pop();
            }
            
        },

        isRoof(value){
            if(value){
                this.paths.push('roof');
            }else {
                this.paths.pop();
            }
            
            console.log(value);
        },
        
        isFloor(value){
            if(value){
                this.paths.push('floor');
            }else {
                this.paths.pop();
            }
            
            console.log(value);
        },
        
        isTrunk(value){
            if(value){
                this.paths.push('trunk');
            }else {
                this.paths.pop();
            }
            
            console.log(value);
        },

        isArcs(value){
            if(value){
                this.paths.push('arcs');
            }else {
                this.paths.pop();
            }
            
            console.log(value);
        },

        isHood(value){
            if(value){
                this.paths.push('hood');
            }else {
                this.paths.pop();
            }
            
            console.log(value);
        },

        isTorpedo(value){
            if(value){
                this.paths.push('Torpedo');
            }else {
                this.paths.pop();
            }
            
            console.log(value);
        },





        paths(arr) {
            console.log(arr);
            if(
                arr.find((item)=> item === 'doors') &&
                arr.find((item)=> item === 'roof') &&
                arr.find((item)=> item === 'floor') &&
                arr.find((item)=> item === 'trunk') &&
                arr.find((item)=> item === 'arcs') &&
                arr.find((item)=> item === 'hood') &&
                arr.find((item)=> item === 'Torpedo')
                ){
                this.isComplexVisible = true;
            }
        },
        
    }

});
// комплекс включкает все чекбосы isCoplex если выключаю один чекбокс то комлекс отключается, и если я по очереди включаю все чекбоксы то комлекс станровится активным 
//** при клике на какой-то el меняю переменную на true или flase (противоположную) */