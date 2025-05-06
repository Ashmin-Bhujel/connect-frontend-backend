import { useEffect, useState } from "react";
import type { UserType } from "./types";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState<UserType[]>([]);

  async function getUsersData(url: string) {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setUsers(response.data);
      }
    } catch (error) {
      console.error("Error fetching users data: ", error);
    }
  }

  // Fetching users data
  useEffect(() => {
    getUsersData("/api/users");
  }, []);

  return (
    <>
      <main className="container mx-auto px-6 py-8">
        <header>
          <h1 className="text-4xl font-bold">
            Connect Frontend and Backend Project
          </h1>
        </header>

        <section className="py-8">
          <h2 className="text-2xl font-medium">Users Count: {users.length}</h2>

          {/* Users container */}
          <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 md:grid-cols-3">
            {users.map((user) => (
              <div
                className="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-4 md:px-8"
                key={user.id}
              >
                <p className="space-x-2 text-xl">
                  <span>[ {user.id} ]</span>
                  <span className="font-semibold">{user.name}</span>
                  <sup className="text-sm">({user.age} years)</sup>
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
