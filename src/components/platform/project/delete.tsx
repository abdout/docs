import { FC } from "react";
import { Icon } from "@iconify/react";
import { deleteProject } from "@/components/platform/project/actions";
import { toast } from "sonner";

interface DeleteProps {
  id: string | undefined;
  onSuccess?: () => Promise<void>;
}

const Delete: FC<DeleteProps> = ({ id, onSuccess }) => {
  const handleDelete = async () => {
    if (!id) return;
    
    toast.custom(
      (t) => (
        <div className="bg-red-500 text-white p-3 rounded flex justify-between items-center w-full">
          <span>Are you sure?</span>
          <div className="flex gap-2 ml-6">
            <button 
              className="px-2 py-1 bg-white text-red-500 rounded text-sm font-medium"
              onClick={async () => {
                toast.dismiss(t);
                try {
                  const result = await deleteProject(id);
                  
                  if (result.success) {
                    toast.success("Project deleted successfully");
                    if (onSuccess) {
                      await onSuccess();
                    }
                  } else {
                    toast.error(result.message || "Failed to delete project");
                  }
                } catch (error: any) {
                  toast.error(error?.message || "An unexpected error occurred");
                }
              }}
            >
              Delete
            </button>
            <button 
              className="px-2 py-1 bg-red-600 text-white rounded text-sm font-medium"
              onClick={() => toast.dismiss(t)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: Infinity, position: "bottom-right" }
    );
  };

  return (
    <button onClick={handleDelete} className="opacity-100">
      <Icon icon="ant-design:delete-filled" width={40}/>
    </button>
  );
};

export default Delete;