"use client";

import { CheckIcon, ImagePlusIcon, Linkedin, PencilIcon, XIcon } from "lucide-react";
import { useId, useState } from "react";

import { useCharacterLimit } from "@/hooks/use-character-limit";
import { useFileUpload } from "@/hooks/use-file-upload";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Separator } from "@/components/ui/separator";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

// Pretend we have initial image files
const initialBgImage = [
  {
    id: "profile-bg-123456789",
    name: "profile-bg.jpg",
    size: 1528737,
    type: "image/jpeg",
    url: "/userProfile/new2.png",
  },
];

const initialAvatarImage = [
  {
    id: "avatar-123456789",
    name: "avatar-72-01.jpg",
    size: 1528737,
    type: "image/jpeg",
    url: "/userProfile/new2.png",
  },
];
interface UserProfile {
  id:string;
  mainName: string;
  mainUsername: string;
  mainBio: string;
  mainWebsite: string;
  mainContacts: string;
  mainAvatar: string;

  setMainName: (name: string) => void;
  setMainUsername: (username: string) => void;
  setMainBio: (bio: string) => void;
  setMainWebsite: (website: string) => void;
  setMainContacts: (contacts: string) => void;
  setMainAvatar: (avatar: string) => void;

}


export default function UserEditProfile({id, mainName,mainUsername,mainBio,mainWebsite,mainContacts,mainAvatar,setMainName,setMainUsername,setMainBio,setMainWebsite,setMainContacts,setMainAvatar}:UserProfile) {
  const [name, setName] = useState(mainName);
  const [username, setUsername] = useState(mainUsername);
  const [bio, setBio] = useState(mainBio);
  const [website, setWebsite] = useState(mainWebsite);
  const [contacts, setContacts] = useState(mainContacts);
  const [avatar, setAvatar] = useState(mainAvatar);

  
  const maxLength = 180;
  const {
    value,
    characterCount,
    handleChange,
    maxLength: limit,
  } = useCharacterLimit({
    initialValue: bio,
    maxLength,
  });

  async function handleEditProfile(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

       const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user?userId=`+ id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, username, bio, website, contacts, image: avatar }),
      credentials: "include",
    });

    const data: { success: boolean } = await res.json();
    if (data.success) {
      toast.success("Profile edited successfully");
      console.log("userProfile edited successfully");
      setMainName(name);
      setMainUsername(username);
      setMainBio(bio);
      setMainWebsite(website);
      setMainContacts(contacts);
      setMainAvatar(avatar);

    }else{
      toast.error("userProfile editing failed");
    }
    
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="text-muted-foreground hover:text-primary cursor-pointer"
                  size="icon-sm"
                  variant="ghost"
                >
                  <PencilIcon className="w-4 h-4" />
                </Button>
              </TooltipTrigger>

              <TooltipContent className="dark px-2 py-1 text-xs">
                Edit Profile
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 overflow-y-visible p-0 sm:max-w-lg [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b px-6 py-4 text-base">
            Edit profile
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          Make changes to your profile here. You can change your photo and set a
          username.
        </DialogDescription>

        <form onSubmit={handleEditProfile}>
          <div className="overflow-y-auto">
            <ProfileBg />
            <Avatar />
            <div className="px-6 pt-4 pb-6">
              <div className="space-y-4 ">
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  {/* name */}
                  <div className="flex-1 space-y-2 ">
                    <Label htmlFor={`${id}-first-name`}>name</Label>
                    <Input
                      id={`${id}-first-name`}
                      placeholder="name"
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {/* username */}
                  <div className="flex-1 space-y-2">
                    <Label htmlFor={`${id}-username`}>username</Label>
                    <div className="relative">
                      <Input
                        className="peer pe-9"
                        id={`${id}-username`}
                        placeholder="username"
                        required
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                        <CheckIcon
                          aria-hidden="true"
                          className="text-emerald-500"
                          size={16}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* biograpgy */}
                <div className="*:not-first:mt-2">
                  <Label htmlFor={`${id}-bio`}>bio</Label>
                  <Textarea
                    aria-describedby={`${id}-description`}
                    id={`${id}-bio`}
                    maxLength={maxLength}
                    placeholder="Freelance Product Designer"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                  <p
                    aria-live="polite"
                    className="mt-2 text-right text-muted-foreground text-xs"
                    id={`${id}-description`}
                    role="status"
                  >
                    <span className="tabular-nums">
                      {limit - characterCount}
                    </span>{" "}
                    characters left
                  </p>
                </div>

                <Separator />

                {/* website */}
                <div className="*:not-first:mt-2">
                  <Label htmlFor={`${id}-website`}>Website</Label>
                  <div className="flex rounded-md shadow-xs">
                    <span className="-z-10 inline-flex items-center rounded-s-md border border-input bg-background px-3 text-muted-foreground text-sm">
                      https://
                    </span>
                    <Input
                      className="-ms-px rounded-s-none shadow-none"
                      id={`${id}-website`}
                      placeholder="srijan-patel.vercel.app/"
                      type="text"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                </div>
                {/* contacts */}
                <div className="*:not-first:mt-2">
                  <Label htmlFor={id}>Contacts</Label>
                  <div className="flex rounded-md shadow-xs">
                   
                     <span className="-z-10 inline-flex items-center rounded-s-md border border-input bg-background px-3 text-muted-foreground text-sm"> 
                       <Linkedin className="w-4 h-4"/>

                    </span>
                    <Input
                      className="-ms-px rounded-s-none shadow-none"
                      id={id}
                      placeholder="https://www.linkedin.com/in/srijan-patel-46a548323/"
                      type="text"
                      value={contacts}
                      onChange={(e) => setContacts(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter className="border-t px-6 py-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function ProfileBg() {
  const [{ files }, { removeFile, openFileDialog, getInputProps }] =
    useFileUpload({
      accept: "image/*",
      initialFiles: initialBgImage,
    });

  const currentImage = files[0]?.preview || null;

  return (
    <div className="h-32">
      <div className="relative flex size-full items-center justify-center overflow-hidden bg-muted">
        {currentImage && (
          <img
            alt={
              files[0]?.preview
                ? "Upload preview"
                : "Default profile background"
            }
            className="size-full object-cover"
            height={96}
            src={currentImage}
            width={512}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          <button
            aria-label={currentImage ? "Change image" : "Upload image"}
            className="z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-none transition-[color,box-shadow] hover:bg-black/80 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            onClick={openFileDialog}
            type="button"
          >
            <ImagePlusIcon aria-hidden="true" size={16} />
          </button>
          {currentImage && (
            <button
              aria-label="Remove image"
              className="z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-none transition-[color,box-shadow] hover:bg-black/80 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
              onClick={() => removeFile(files[0]?.id)}
              type="button"
            >
              <XIcon aria-hidden="true" size={16} />
            </button>
          )}
        </div>
      </div>
      <input
        {...getInputProps()}
        aria-label="Upload image file"
        className="sr-only"
      />
    </div>
  );
}

function Avatar() {
  const [{ files }, { openFileDialog, getInputProps }] = useFileUpload({
    accept: "image/*",
    initialFiles: initialAvatarImage,
  });

  const currentImage = files[0]?.preview || null;

  return (
    <div className="-mt-10 px-6">
      <div className="relative flex size-20 items-center justify-center overflow-hidden rounded-full border-4 border-background bg-muted shadow-black/10 shadow-xs">
        {currentImage && (
          <img
            alt="Profile"
            className="size-full object-cover"
            height={80}
            src={currentImage}
            width={80}
          />
        )}
        <button
          aria-label="Change profile picture"
          className="absolute flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-none transition-[color,box-shadow] hover:bg-black/80 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
          onClick={openFileDialog}
          type="button"
        >
          <ImagePlusIcon aria-hidden="true" size={16} />
        </button>
        <input
          {...getInputProps()}
          aria-label="Upload profile picture"
          className="sr-only"
        />
      </div>
    </div>
  );
}
