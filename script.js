        function insert(dig) {
            document.form.textview.value = document.form.textview.value + dig;
        }
    
        function clean() {
            document.form.textview.value = "";
        }
        
        function result() {
            document.form.textview.value = eval(document.form.textview.value);
        }
        
        function backspace() {
            var view = document.form.textview.value;
            document.form.textview.value = view.substring(0,view.length - 1)
        }