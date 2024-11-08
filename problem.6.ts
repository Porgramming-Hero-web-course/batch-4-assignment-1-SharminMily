// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

interface Profile {
    name: string;
    age: number;
    email: string;
}

function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    return { ...profile, ...updates };
}

const profile: Profile = {
    name: "Mina",
    age: 21,
    email: "mina@gmail.com"
};

const updates: Partial<Profile> = {
    age: 50,
    email: "rina22@gmail.com"
};

const updatedProfile = updateProfile(profile, updates);

console.log(updatedProfile); 
