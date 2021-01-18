import Blog, { find, findById, findOne, findByIdAndUpdate as _findByIdAndUpdate, findByIdAndDelete as _findByIdAndDelete } from '../model/model';

export async function getall(req,res){

    let data;
    try {
        data=await find();
    } catch (error) {
        if(error)
        return res.status(500).json(error);
        
    }

    res.status(200).json(data);

}

export async function getone(req,res){

    let data;

    // Blog.findById(req.params.blogId).exec((err,data)=>{
    //     if(err || !data)
    //     return res.status(400).json({
    //         error:"this is the data not send"
    //     });

    //     res.json(data);

    // })
    try{
        data = await findById(req.params.blogId);
        
    }catch(error)
    {
        if(error)
        return res.status(400).json(error);
    }
    res.json(data);    
}
export async function getoneByTitle(req,res){
    
    // Blog.findOne({title:req.params.blogTitle}).exec((err,data)=>{
    //     if(err || !data)
    //     return res.status(400).json({
    //         error:"this is the data not send"
    //     });

    //     res.json(data);

    // })
    try{
        data = await findOne({title:req.params.blogTitle});
        
    }catch(error)
    {
        if(error)
        return res.status(400).json(error);
    }
    res.json(data);
    
}
export async function getoneByAuthor(req,res){
    
    try{
        data = await findOne({author:req.params.blogAuthor});
        
    }catch(error)
    {
        if(error)
        return res.status(400).json(error);
    }
    res.json(data);
    
}

export async function create(req,res){
    const newblog=new Blog({
        title:req.body.title,
        author:req.body.author,
        desc:req.body.desc
    });
    // newblog.save().then((blog)=>{
    //     res.status(201).json({"msg":"created","blog":blog});
    // }).catch((err)=>{
    //     if(err) return res.status(500).json(err);
    // })

    try{
       await newblog.save();
        
    }catch(error)
    {
        if(error)
        return res.status(400).json(error);
    }
    res.json({
        "msg":"Created success"
    });
}

export async function updateone(req,res){

    if( !req.body.title|| !req.body.author|| !req.body.desc)
        return res.status(500).json({"msg":"fill all the fields"});
    
    let blog;
    try 
    {
            blog = await _findByIdAndUpdate(req.params.blogId,{
                title: req.body.title,
                desc: req.body.desc},{new: true});

            if(!blog) return res.status(404).json({"msg":"not found"});
    } 
    catch (err) 
    {
        if(err) return res.status(500).json(err);
    }
    res.status(202).json({
        "msg":"updated",
        "doc":blog
    });

}
export async function deleteone(req,res){

    let blog;
    try {
        console.log(req.params.blogId);
        blog = await _findByIdAndDelete(req.params.blogId);

            if(!blog) return res.status(404).json({"msg":"Blog not found"});
        } 
    catch (err) 
    {
        if(err) return res.status(500).json(err);
    }
    res.status(202).json({
        "msg":"deleted",
        "doc":blog
    });

}