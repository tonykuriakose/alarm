import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, LogOut, Search, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Simple "Demo" Authentication
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
      toast.success("Welcome back, Admin!");
    } else {
      toast.error("Invalid Password");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      const storedEnquiries = JSON.parse(localStorage.getItem("alarm_enquiries") || "[]");
      setEnquiries(storedEnquiries);
    }
  }, [isAuthenticated]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this enquiry?")) {
      const updated = enquiries.filter((e) => e.id !== id);
      setEnquiries(updated);
      localStorage.setItem("alarm_enquiries", JSON.stringify(updated));
      toast.success("Enquiry deleted");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="bg-emerald-500/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Admin Login</h2>
            <p className="text-slate-400 text-sm mt-2">Enter password to access dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Unlock Dashboard
            </button>
            <p className="text-xs text-center text-slate-500 mt-4">
              (Demo Password: <span className="text-slate-300">admin123</span>)
            </p>
          </form>
            <div className="mt-4 text-center">
                <Link to="/" className="text-emerald-400 text-sm hover:underline">Back to Home</Link>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-slate-400">Manage your enquiries and leads</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>

        <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="p-6 border-b border-slate-800 flex justify-between items-center">
            <h3 className="text-xl font-semibold">Recent Enquiries</h3>
            <div className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 flex items-center gap-2 text-slate-400">
               <Search className="w-4 h-4" />
               <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm w-32 md:w-48 text-white" />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950/50 text-slate-400 text-sm uppercase tracking-wider">
                  <th className="p-4 font-medium">Date</th>
                  <th className="p-4 font-medium">Name</th>
                  <th className="p-4 font-medium">Service</th>
                  <th className="p-4 font-medium">Phone</th>
                  <th className="p-4 font-medium">Email</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {enquiries.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="p-8 text-center text-slate-500">
                      No enquiries found. Submissions will appear here.
                    </td>
                  </tr>
                ) : (
                  enquiries.map((enquiry) => (
                    <tr key={enquiry.id} className="hover:bg-slate-800/50 transition-colors">
                      <td className="p-4 text-slate-300 text-sm">
                        {new Date(enquiry.date).toLocaleDateString()}
                      </td>
                      <td className="p-4 text-white font-medium">{enquiry.name}</td>
                      <td className="p-4 text-slate-300">
                        <span className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-xs border border-emerald-500/20">
                          {enquiry.serviceType}
                        </span>
                      </td>
                      <td className="p-4 text-slate-300">{enquiry.phone}</td>
                      <td className="p-4 text-slate-300 break-all">{enquiry.email}</td>
                      <td className="p-4">
                        <span className="text-xs font-medium bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20">
                          New
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleDelete(enquiry.id)}
                          className="text-slate-500 hover:text-red-400 transition-colors p-2"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
