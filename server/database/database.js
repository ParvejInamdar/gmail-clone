import mongoose from "mongoose";

const dbConnect = () => {
    // const DB_URL = 'mongodb+srv://inamdarparvej:Gmailclone@7477_69@gmailclone.eww9qld.mongodb.net/?retryWrites=true&w=majority&appName=gmailclone'
    // const DB_URL = 'mongodb+srv://inamdarparvej:Nokia%400069@gmailclone.chnk3ka.mongodb.net/?retryWrites=true&w=majority&appName=gmailclone'
    // const DB_URL = 'mongodb+srv://inamdarparvej:Nokia%400069@gmailclone.chnk3ka.mongodb.net/?retryWrites=true&w=majority&appName=gmailclone'
    const DB_URL = 'mongodb+srv://inamdarparvej:Nokia%400069@gmailclone.chnk3ka.mongodb.net/?retryWrites=true&w=majority&appName=gmailclone'
    try {
        mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("connected to Database sucessfully");
        }).catch((error) => {
            console.log("connect error", error);
        });
    } catch (error) {
        console.log("error while connecting to db", error);
    }
}

export default dbConnect;