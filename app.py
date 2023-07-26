from flask import Flask,render_template,redirect,request,url_for
from flask_mysql_connector import MySQL


app=Flask(__name__)

app.config['MYSQL_USER'] = "root"
app.config['MYSQL_DATABASE'] = "dice_game"
app.config['MYSQL_HOST'] ="localhost"
app.config['MYSQL_PASSWORD'] = "vaibhav123"
app.config['SECRET_KEY']='mysecretkey'

SAMPLE_QUERY = 'select * from UserInfo'

mysql = MySQL(app)



@app.route('/',methods=['GET','POST'])
def loginForm():
    conn=mysql.connection
    cur=conn.cursor()
    query="select * from UsersInfo"
    cur.execute(query)
    result=cur.fetchall()
    cur.close()
    conn.close()
    
    log_on=False
    if request.method=="POST":
        username=request.form.get("username")
        password=request.form.get("password")
        for i in result:
            if i[2]==username and i[3]==password:
                log_on=True
                return redirect(url_for("diceEntry"))
        if log_on==False:
            return render_template("login.html",results="Username and Password is Incorrect",bool1=True)
               
    return render_template('login.html',bool2=True)

@app.route('/registerForm',methods=['GET','POST'])
def registerForm():
    conn=mysql.connection
    cur=conn.cursor()
    if request.method=="POST":
        name=request.form.get("name")
        username=request.form.get("username")
        password=request.form.get("password")
        print(name)
        print(username)
        print(password)
        query="Insert into UsersInfo(name1,username,password1) values(%s,%s,%s)"
        val=(name,username,password)
        cur.execute(query,val)
        conn.commit()
        return redirect(url_for("loginForm"))
    return render_template("register.html")

@app.route('/diceEntry',methods=['GET','POST'])
def diceEntry():
    conn=mysql.connection
    cur=conn.cursor()
    if request.method=="POST":
        player1=request.form.get("player-1")
        player2=request.form.get("player-2")
        return redirect(url_for("dice_game"))


    return render_template("dice_entry.html")



@app.route('/dice')
def dice_game():
    return render_template("dice.html")

if __name__=="__main__":
    app.run(debug=True)