defmodule SearchService.V1.HealthView do
  use SearchService.Web, :view

  def render(_, %{result: result}) do
    result
  end
end

