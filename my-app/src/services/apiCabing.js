import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error(`could not get cabin ${error.message}`);
  }

  return data;
}

export async function createCabin(newCabin) {
  const { data, error } = await supabase.from("cabins").insert([newCabin]);

  if (error) {
    console.error(error);
    throw new Error("cabin could not be created");
  }

  return data;
}

export async function deleteCabin(id) {
  const { error, data } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("could not delete cabin");
  }

  return data;
}
