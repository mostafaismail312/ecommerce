import { useState } from "react";

import ProfileCard from "./components/ProfileCard";
import ProfileDetails from "./components/ProfileDetails";
import ProfileStats from "./components/ProfileStats";
import ProfileTabs, { type ProfileTab } from "./components/ProfileTabs";

import OrdersTab from "./components/OrdersTab";
import WishlistTab from "./components/WishlistTab";
import ReturnsTab from "./components/ReturnsTab";
import AddressTab from "./components/AddressTab";

export default function Profile() {
  const [activeTab, setActiveTab] =
    useState<ProfileTab>("orders");

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            My Profile
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your account information, orders and wishlist.
          </p>
        </div>

        {/* Top Section */}
        <div className="grid gap-6 lg:grid-cols-[440px_1fr]">
          <ProfileCard user={user} />

          <div className="space-y-6">
            <ProfileDetails user={user} />

            <ProfileStats
              orders={12}
              wishlist={8}
              returns={2}
              reviews={15}
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-10">
          <ProfileTabs
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        {/* Content */}
        <div className="mt-8">
          {activeTab === "orders" && <OrdersTab />}

          {activeTab === "wishlist" && (
            <WishlistTab />
          )}

          {activeTab === "returns" && (
            <ReturnsTab />
          )}

          {activeTab === "addresses" && (
            <AddressTab />
          )}
        </div>
      </div>
    </div>
  );
}