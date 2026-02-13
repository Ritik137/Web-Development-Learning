import { Contact } from "../Models/ContactModel.js";

// create new contact
export const newContact = async (req, res) => {
    const { name, email, phone, type } = req.body;

    if (!name || !email || !phone || !type) {
        return res.json({ message: "All fields are required", success: false });
    }

    try {
        let saveContact = await Contact.create({
            name,
            email,
            phone,
            type,
        });
        console.log(saveContact)

        res.json({ message: "Contact saved successfully..!", success: true, data: saveContact });
    } catch (error) {
        res.json({ message: "Error saving contact", success: false, error: error.message });
    }
};

// get all contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find(); // fetch all documents
    res.json({ message: "All contacts fetched", contacts, success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message, success: false });
  }
};


// get contact by id
export const getContactbyId = async (req, res) => {
    const id = req.params.id

    const userContact = await Contact.findById(id);
    if (!userContact) return res.json({ message: "No contact find", success: false });
    res.json({ message: "Contact fetched ", userContact, success: true })

}

// update contact by id
export const updateContactById = async (req,res)=>{
    const id = req.params.id;
    const {name,email,phone,type} = req.body;

    let updatedContact = await Contact.findByIdAndUpdate(id, {
        name,
        email,
        phone,
        type,
        user: req.user
    },
{new : true});
if(!updatedContact){
    return res.json({message: "no contact exist..", success : false})
}
res.json({message: "Contact updated successfully... !", updatedContact , success: true})
}



// delet contact by id
export const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.json({ message: "No contact found", success: false });
    }

    res.json({ message: "Contact deleted successfully", deletedContact, success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message, success: false });
  }
};

