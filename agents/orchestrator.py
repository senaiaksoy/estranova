"""
Orchestrator (LangGraph router + start node).

**Graf derlemesi:** ``main.build_graph`` — dugumler ve ``conditional_edges`` orada kurulur.

**Saf yonlendirme:** ``OrchestratorAgent.route_after_writer`` / ``route_after_compliance``
yalnizca okuma yapar; sayac ve ``best_effort_publish`` kalici mutasyonlari
``ComplianceExpertAgent.run`` icinde yapilir (bkz. ``docs/PIPELINE.md`` G3).

Estranova'da sinif tanimi: ``orchestrator_agent.OrchestratorAgent``.
"""

from __future__ import annotations

from .orchestrator_agent import OrchestratorAgent

__all__ = ["OrchestratorAgent"]
